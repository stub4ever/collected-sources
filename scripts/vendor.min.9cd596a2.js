/*! grunt-start-kit v1.0.0 | https://github.com/stub4ever/grunt-start-kit#readme *//*eslint-disable no-unused-vars*/
/*!
 * jQuery JavaScript Library v3.1.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-07-07T21:44Z
 */
!function(global,factory){"use strict";"object"==typeof module&&"object"==typeof module.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=global.document?factory(global,!0):function(w){if(!w.document)throw new Error("jQuery requires a window with a document");return factory(w)}:factory(global)}("undefined"!=typeof window?window:this,function(window,noGlobal){
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";function DOMEval(code,doc){doc=doc||document;var script=doc.createElement("script");script.text=code,doc.head.appendChild(script).parentNode.removeChild(script)}function isArrayLike(obj){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);return"function"!==type&&!jQuery.isWindow(obj)&&("array"===type||0===length||"number"==typeof length&&length>0&&length-1 in obj)}
// Implement the identical functionality for filter and not
function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier))return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not});if(qualifier.nodeType)return jQuery.grep(elements,function(elem){return elem===qualifier!==not});if("string"==typeof qualifier){if(risSimple.test(qualifier))return jQuery.filter(qualifier,elements,not);qualifier=jQuery.filter(qualifier,elements)}return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not&&1===elem.nodeType})}function sibling(cur,dir){for(;(cur=cur[dir])&&1!==cur.nodeType;);return cur}
// Convert String-formatted options into Object-formatted ones
function createOptions(options){var object={};return jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=!0}),object}function Identity(v){return v}function Thrower(ex){throw ex}function adoptValue(value,resolve,reject){var method;try{
// Check for promise aspect first to privilege synchronous behavior
value&&jQuery.isFunction(method=value.promise)?method.call(value).done(resolve).fail(reject):value&&jQuery.isFunction(method=value.then)?method.call(value,resolve,reject):
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
resolve.call(void 0,value)}catch(value){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
reject.call(void 0,value)}}
// The ready event handler and self cleanup method
function completed(){document.removeEventListener("DOMContentLoaded",completed),window.removeEventListener("load",completed),jQuery.ready()}function Data(){this.expando=jQuery.expando+Data.uid++}function dataAttr(elem,key,data){var name;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===data&&1===elem.nodeType)if(name="data-"+key.replace(rmultiDash,"-$&").toLowerCase(),data=elem.getAttribute(name),"string"==typeof data){try{data="true"===data||"false"!==data&&("null"===data?null:
// Only convert to a number if it doesn't change the string
+data+""===data?+data:rbrace.test(data)?JSON.parse(data):data)}catch(e){}
// Make sure we set the data so it isn't changed later
dataUser.set(elem,key,data)}else data=void 0;return data}function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur()}:function(){return jQuery.css(elem,prop,"")},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),
// Starting value computation is required for potential unit mismatches
initialInUnit=(jQuery.cssNumber[prop]||"px"!==unit&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){
// Trust units reported by jQuery.css
unit=unit||initialInUnit[3],
// Make sure we update the tween properties later on
valueParts=valueParts||[],
// Iteratively approximate from a nonzero starting point
initialInUnit=+initial||1;do
// If previous iteration zeroed out, double until we get *something*.
// Use string for doubling so we don't accidentally see scale as unchanged below
scale=scale||".5",
// Adjust and apply
initialInUnit/=scale,jQuery.style(elem,prop,initialInUnit+unit);while(scale!==(scale=currentValue()/initial)&&1!==scale&&--maxIterations)}
// Apply relative offset (+=/-=) if specified
return valueParts&&(initialInUnit=+initialInUnit||+initial||0,adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2],tween&&(tween.unit=unit,tween.start=initialInUnit,tween.end=adjusted)),adjusted}function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];return display?display:(temp=doc.body.appendChild(doc.createElement(nodeName)),display=jQuery.css(temp,"display"),temp.parentNode.removeChild(temp),"none"===display&&(display="block"),defaultDisplayMap[nodeName]=display,display)}function showHide(elements,show){
// Determine new display value for elements that need to change
for(var display,elem,values=[],index=0,length=elements.length;index<length;index++)elem=elements[index],elem.style&&(display=elem.style.display,show?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===display&&(values[index]=dataPriv.get(elem,"display")||null,values[index]||(elem.style.display="")),""===elem.style.display&&isHiddenWithinTree(elem)&&(values[index]=getDefaultDisplay(elem))):"none"!==display&&(values[index]="none",
// Remember what we're overwriting
dataPriv.set(elem,"display",display)));
// Set the display of the elements in a second loop to avoid constant reflow
for(index=0;index<length;index++)null!=values[index]&&(elements[index].style.display=values[index]);return elements}function getAll(context,tag){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var ret="undefined"!=typeof context.getElementsByTagName?context.getElementsByTagName(tag||"*"):"undefined"!=typeof context.querySelectorAll?context.querySelectorAll(tag||"*"):[];return void 0===tag||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret}
// Mark scripts as having already been evaluated
function setGlobalEval(elems,refElements){for(var i=0,l=elems.length;i<l;i++)dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"))}function buildFragment(elems,context,scripts,selection,ignored){for(var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;i<l;i++)if(elem=elems[i],elem||0===elem)
// Add nodes directly
if("object"===jQuery.type(elem))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,elem.nodeType?[elem]:elem);else if(rhtml.test(elem)){for(tmp=tmp||fragment.appendChild(context.createElement("div")),
// Deserialize a standard representation
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase(),wrap=wrapMap[tag]||wrapMap._default,tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2],
// Descend through wrappers to the right content
j=wrap[0];j--;)tmp=tmp.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,tmp.childNodes),
// Remember the top-level container
tmp=fragment.firstChild,
// Ensure the created nodes are orphaned (#12392)
tmp.textContent=""}else nodes.push(context.createTextNode(elem));for(
// Remove wrapper from fragment
fragment.textContent="",i=0;elem=nodes[i++];)
// Skip elements already in the context collection (trac-4087)
if(selection&&jQuery.inArray(elem,selection)>-1)ignored&&ignored.push(elem);else
// Capture executables
if(contains=jQuery.contains(elem.ownerDocument,elem),
// Append to fragment
tmp=getAll(fragment.appendChild(elem),"script"),
// Preserve script evaluation history
contains&&setGlobalEval(tmp),scripts)for(j=0;elem=tmp[j++];)rscriptType.test(elem.type||"")&&scripts.push(elem);return fragment}function returnTrue(){return!0}function returnFalse(){return!1}
// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement(){try{return document.activeElement}catch(err){}}function on(elem,types,selector,data,fn,one){var origFn,type;
// Types can be a map of types/handlers
if("object"==typeof types){
// ( types-Object, selector, data )
"string"!=typeof selector&&(
// ( types-Object, data )
data=data||selector,selector=void 0);for(type in types)on(elem,type,selector,data,types[type],one);return elem}if(null==data&&null==fn?(
// ( types, fn )
fn=selector,data=selector=void 0):null==fn&&("string"==typeof selector?(
// ( types, selector, fn )
fn=data,data=void 0):(
// ( types, data, fn )
fn=data,data=selector,selector=void 0)),fn===!1)fn=returnFalse;else if(!fn)return elem;
// Use same guid so caller can remove using origFn
return 1===one&&(origFn=fn,fn=function(event){
// Can use an empty set, since event contains the info
return jQuery().off(event),origFn.apply(this,arguments)},fn.guid=origFn.guid||(origFn.guid=jQuery.guid++)),elem.each(function(){jQuery.event.add(this,types,fn,data,selector)})}function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(11!==content.nodeType?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem:elem}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript(elem){return elem.type=(null!==elem.getAttribute("type"))+"/"+elem.type,elem}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);return match?elem.type=match[1]:elem.removeAttribute("type"),elem}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(1===dest.nodeType){
// 1. Copy private data: events, handlers, etc.
if(dataPriv.hasData(src)&&(pdataOld=dataPriv.access(src),pdataCur=dataPriv.set(dest,pdataOld),events=pdataOld.events)){delete pdataCur.handle,pdataCur.events={};for(type in events)for(i=0,l=events[type].length;i<l;i++)jQuery.event.add(dest,type,events[type][i])}
// 2. Copy user data
dataUser.hasData(src)&&(udataOld=dataUser.access(src),udataCur=jQuery.extend({},udataOld),dataUser.set(dest,udataCur))}}
// Fix IE bugs, see support tests
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===nodeName&&rcheckableType.test(src.type)?dest.checked=src.checked:"input"!==nodeName&&"textarea"!==nodeName||(dest.defaultValue=src.defaultValue)}function domManip(collection,args,callback,ignored){
// Flatten any nested arrays
args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);
// We can't cloneNode fragments that contain checked, in WebKit
if(isFunction||l>1&&"string"==typeof value&&!support.checkClone&&rchecked.test(value))return collection.each(function(index){var self=collection.eq(index);isFunction&&(args[0]=value.call(this,index,self.html())),domManip(self,args,callback,ignored)});if(l&&(fragment=buildFragment(args,collection[0].ownerDocument,!1,collection,ignored),first=fragment.firstChild,1===fragment.childNodes.length&&(fragment=first),first||ignored)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(scripts=jQuery.map(getAll(fragment,"script"),disableScript),hasScripts=scripts.length;i<l;i++)node=fragment,i!==iNoClone&&(node=jQuery.clone(node,!0,!0),
// Keep references to cloned scripts for later restoration
hasScripts&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(scripts,getAll(node,"script"))),callback.call(collection[i],node,i);if(hasScripts)
// Evaluate executable scripts on first document insertion
for(doc=scripts[scripts.length-1].ownerDocument,
// Reenable scripts
jQuery.map(scripts,restoreScript),i=0;i<hasScripts;i++)node=scripts[i],rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)&&(node.src?
// Optional AJAX dependency, but won't run scripts if not present
jQuery._evalUrl&&jQuery._evalUrl(node.src):DOMEval(node.textContent.replace(rcleanScript,""),doc))}return collection}function remove(elem,selector,keepData){for(var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;null!=(node=nodes[i]);i++)keepData||1!==node.nodeType||jQuery.cleanData(getAll(node)),node.parentNode&&(keepData&&jQuery.contains(node.ownerDocument,node)&&setGlobalEval(getAll(node,"script")),node.parentNode.removeChild(node));return elem}function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;
// Support: IE <=9 only
// getPropertyValue is only needed for .css('filter') (#12537)
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
return computed=computed||getStyles(elem),computed&&(ret=computed.getPropertyValue(name)||computed[name],""!==ret||jQuery.contains(elem.ownerDocument,elem)||(ret=jQuery.style(elem,name)),!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)&&(width=style.width,minWidth=style.minWidth,maxWidth=style.maxWidth,style.minWidth=style.maxWidth=style.width=ret,ret=computed.width,style.width=width,style.minWidth=minWidth,style.maxWidth=maxWidth)),void 0!==ret?ret+"":ret}function addGetHookIf(conditionFn,hookFn){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
return conditionFn()?void delete this.get:(this.get=hookFn).apply(this,arguments)}}}
// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName(name){
// Shortcut for names that are not vendor prefixed
if(name in emptyStyle)return name;for(
// Check for vendor prefixed names
var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;i--;)if(name=cssPrefixes[i]+capName,name in emptyStyle)return name}function setPositiveNumber(elem,value,subtract){
// Any relative (+/-) values have already been
// normalized at this point
var matches=rcssNum.exec(value);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return matches?Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){for(var i=extra===(isBorderBox?"border":"content")?
// If we already have the right measurement, avoid augmentation
4:
// Otherwise initialize for horizontal or vertical properties
"width"===name?1:0,val=0;i<4;i+=2)
// Both box models exclude margin, so add it if we want it
"margin"===extra&&(val+=jQuery.css(elem,extra+cssExpand[i],!0,styles)),isBorderBox?(
// border-box includes padding, so remove it if we want content
"content"===extra&&(val-=jQuery.css(elem,"padding"+cssExpand[i],!0,styles)),
// At this point, extra isn't border nor margin, so remove border
"margin"!==extra&&(val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",!0,styles))):(
// At this point, extra isn't content, so add padding
val+=jQuery.css(elem,"padding"+cssExpand[i],!0,styles),
// At this point, extra isn't content nor padding, so add border
"padding"!==extra&&(val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",!0,styles)));return val}function getWidthOrHeight(elem,name,extra){
// Start with offset property, which is equivalent to the border-box value
var val,valueIsBorderBox=!0,styles=getStyles(elem),isBorderBox="border-box"===jQuery.css(elem,"boxSizing",!1,styles);
// Some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
elem.getClientRects().length&&(val=elem.getBoundingClientRect()[name]),val<=0||null==val){
// Computed unit is not pixels. Stop here and return.
if(
// Fall back to computed then uncomputed css if necessary
val=curCSS(elem,name,styles),(val<0||null==val)&&(val=elem.style[name]),rnumnonpx.test(val))return val;
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]),
// Normalize "", auto, and prepare for extra
val=parseFloat(val)||0}
// Use the active box-sizing model to add/subtract irrelevant styles
return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px"}function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing)}function raf(){timerId&&(window.requestAnimationFrame(raf),jQuery.fx.tick())}
// Animations created synchronously will run synchronously
function createFxNow(){return window.setTimeout(function(){fxNow=void 0}),fxNow=jQuery.now()}
// Generate parameters to create a standard animation
function genFx(type,includeWidth){var which,i=0,attrs={height:type};for(
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
includeWidth=includeWidth?1:0;i<4;i+=2-includeWidth)which=cssExpand[i],attrs["margin"+which]=attrs["padding"+which]=type;return includeWidth&&(attrs.opacity=attrs.width=type),attrs}function createTween(value,prop,animation){for(var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;index<length;index++)if(tween=collection[index].call(animation,prop,value))
// We're done with this property
return tween}function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");
// Queue-skipping animations hijack the fx hooks
opts.queue||(hooks=jQuery._queueHooks(elem,"fx"),null==hooks.unqueued&&(hooks.unqueued=0,oldfire=hooks.empty.fire,hooks.empty.fire=function(){hooks.unqueued||oldfire()}),hooks.unqueued++,anim.always(function(){
// Ensure the complete handler is called before this completes
anim.always(function(){hooks.unqueued--,jQuery.queue(elem,"fx").length||hooks.empty.fire()})}));
// Detect show/hide animations
for(prop in props)if(value=props[prop],rfxtypes.test(value)){if(delete props[prop],toggle=toggle||"toggle"===value,value===(hidden?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==value||!dataShow||void 0===dataShow[prop])continue;hidden=!0}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop)}if(
// Bail out if this is a no-op like .hide().hide()
propTween=!jQuery.isEmptyObject(props),propTween||!jQuery.isEmptyObject(orig)){
// Restrict "overflow" and "display" styles during box animations
isBox&&1===elem.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 13
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY
opts.overflow=[style.overflow,style.overflowX,style.overflowY],
// Identify a display type, preferring old show/hide data over the CSS cascade
restoreDisplay=dataShow&&dataShow.display,null==restoreDisplay&&(restoreDisplay=dataPriv.get(elem,"display")),display=jQuery.css(elem,"display"),"none"===display&&(restoreDisplay?display=restoreDisplay:(
// Get nonempty value(s) by temporarily forcing visibility
showHide([elem],!0),restoreDisplay=elem.style.display||restoreDisplay,display=jQuery.css(elem,"display"),showHide([elem]))),
// Animate inline elements as inline-block
("inline"===display||"inline-block"===display&&null!=restoreDisplay)&&"none"===jQuery.css(elem,"float")&&(
// Restore the original display value at the end of pure show/hide animations
propTween||(anim.done(function(){style.display=restoreDisplay}),null==restoreDisplay&&(display=style.display,restoreDisplay="none"===display?"":display)),style.display="inline-block")),opts.overflow&&(style.overflow="hidden",anim.always(function(){style.overflow=opts.overflow[0],style.overflowX=opts.overflow[1],style.overflowY=opts.overflow[2]})),
// Implement show/hide animations
propTween=!1;for(prop in orig)
// General show/hide setup for this element animation
propTween||(dataShow?"hidden"in dataShow&&(hidden=dataShow.hidden):dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
toggle&&(dataShow.hidden=!hidden),
// Show elements before animating them
hidden&&showHide([elem],!0),/* eslint-disable no-loop-func */
anim.done(function(){/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
hidden||showHide([elem]),dataPriv.remove(elem,"fxshow");for(prop in orig)jQuery.style(elem,prop,orig[prop])})),
// Per-property setup
propTween=createTween(hidden?dataShow[prop]:0,prop,anim),prop in dataShow||(dataShow[prop]=propTween.start,hidden&&(propTween.end=propTween.start,propTween.start=0))}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;
// camelCase, specialEasing and expand cssHook pass
for(index in props)if(name=jQuery.camelCase(index),easing=specialEasing[name],value=props[index],jQuery.isArray(value)&&(easing=value[1],value=props[index]=value[0]),index!==name&&(props[name]=value,delete props[index]),hooks=jQuery.cssHooks[name],hooks&&"expand"in hooks){value=hooks.expand(value),delete props[name];
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(index in value)index in props||(props[index]=value[index],specialEasing[index]=easing)}else specialEasing[name]=easing}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){
// Don't match elem in the :animated selector
delete tick.elem}),tick=function(){if(stopped)return!1;for(var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),
// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;index<length;index++)animation.tweens[index].run(percent);return deferred.notifyWith(elem,[animation,percent,remaining]),percent<1&&length?remaining:(deferred.resolveWith(elem,[animation]),!1)},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(!0,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);return animation.tweens.push(tween),tween},stop:function(gotoEnd){var index=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
length=gotoEnd?animation.tweens.length:0;if(stopped)return this;for(stopped=!0;index<length;index++)animation.tweens[index].run(1);
// Resolve when we played the last frame; otherwise, reject
return gotoEnd?(deferred.notifyWith(elem,[animation,1,0]),deferred.resolveWith(elem,[animation,gotoEnd])):deferred.rejectWith(elem,[animation,gotoEnd]),this}}),props=animation.props;for(propFilter(props,animation.opts.specialEasing);index<length;index++)if(result=Animation.prefilters[index].call(animation,elem,props,animation.opts))return jQuery.isFunction(result.stop)&&(jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result)),result;
// attach callbacks from options
return jQuery.map(props,createTween,animation),jQuery.isFunction(animation.opts.start)&&animation.opts.start.call(elem,animation),jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue})),animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)}function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||""}function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj))
// Serialize array item.
jQuery.each(obj,function(i,v){traditional||rbracket.test(prefix)?
// Treat each array item as a scalar.
add(prefix,v):
// Item is non-scalar (array or object), encode its numeric index.
buildParams(prefix+"["+("object"==typeof v&&null!=v?i:"")+"]",v,traditional,add)});else if(traditional||"object"!==jQuery.type(obj))
// Serialize scalar item.
add(prefix,obj);else
// Serialize object item.
for(name in obj)buildParams(prefix+"["+name+"]",obj[name],traditional,add)}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports(structure){
// dataTypeExpression is optional and defaults to "*"
return function(dataTypeExpression,func){"string"!=typeof dataTypeExpression&&(func=dataTypeExpression,dataTypeExpression="*");var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func))
// For each dataType in the dataTypeExpression
for(;dataType=dataTypes[i++];)
// Prepend if requested
"+"===dataType[0]?(dataType=dataType.slice(1)||"*",(structure[dataType]=structure[dataType]||[]).unshift(func)):(structure[dataType]=structure[dataType]||[]).push(func)}}
// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){function inspect(dataType){var selected;return inspected[dataType]=!0,jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);return"string"!=typeof dataTypeOrTransport||seekingTransport||inspected[dataTypeOrTransport]?seekingTransport?!(selected=dataTypeOrTransport):void 0:(options.dataTypes.unshift(dataTypeOrTransport),inspect(dataTypeOrTransport),!1)}),selected}var inspected={},seekingTransport=structure===transports;return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src)void 0!==src[key]&&((flatOptions[key]?target:deep||(deep={}))[key]=src[key]);return deep&&jQuery.extend(!0,target,deep),target}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses(s,jqXHR,responses){
// Remove auto dataType and get content-type in the process
for(var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;"*"===dataTypes[0];)dataTypes.shift(),void 0===ct&&(ct=s.mimeType||jqXHR.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(ct)for(type in contents)if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break}
// Check to see if we have a response for the expected dataType
if(dataTypes[0]in responses)finalDataType=dataTypes[0];else{
// Try convertible dataTypes
for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break}firstDataType||(firstDataType=type)}
// Or just use first one
finalDataType=finalDataType||firstDataType}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(finalDataType)return finalDataType!==dataTypes[0]&&dataTypes.unshift(finalDataType),responses[finalDataType]}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},
// Work with a copy of dataTypes in case we need to modify it for conversion
dataTypes=s.dataTypes.slice();
// Create converters map with lowercased keys
if(dataTypes[1])for(conv in s.converters)converters[conv.toLowerCase()]=s.converters[conv];
// Convert to each sequential dataType
for(current=dataTypes.shift();current;)if(s.responseFields[current]&&(jqXHR[s.responseFields[current]]=response),
// Apply the dataFilter if provided
!prev&&isSuccess&&s.dataFilter&&(response=s.dataFilter(response,s.dataType)),prev=current,current=dataTypes.shift())
// There's only work to do if current dataType is non-auto
if("*"===current)current=prev;else if("*"!==prev&&prev!==current){
// If none found, seek a pair
if(
// Seek a direct converter
conv=converters[prev+" "+current]||converters["* "+current],!conv)for(conv2 in converters)if(
// If conv2 outputs current
tmp=conv2.split(" "),tmp[1]===current&&(
// If prev can be converted to accepted input
conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]])){
// Condense equivalence converters
conv===!0?conv=converters[conv2]:converters[conv2]!==!0&&(current=tmp[0],dataTypes.unshift(tmp[1]));break}
// Apply converter (if not an equivalence)
if(conv!==!0)
// Unless errors are allowed to bubble, catch and return them
if(conv&&s["throws"])response=conv(response);else try{response=conv(response)}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current}}}return{state:"success",data:response}}/**
 * Gets a window from an element
 */
function getWindow(elem){return jQuery.isWindow(elem)?elem:9===elem.nodeType&&elem.defaultView}var arr=[],document=window.document,getProto=Object.getPrototypeOf,slice=arr.slice,concat=arr.concat,push=arr.push,indexOf=arr.indexOf,class2type={},toString=class2type.toString,hasOwn=class2type.hasOwnProperty,fnToString=hasOwn.toString,ObjectFunctionString=fnToString.call(Object),support={},version="3.1.0",
// Define a local copy of jQuery
jQuery=function(selector,context){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new jQuery.fn.init(selector,context)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
// Matches dashed string for camelizing
rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g,
// Used by jQuery.camelCase as callback to replace()
fcamelCase=function(all,letter){return letter.toUpperCase()};jQuery.fn=jQuery.prototype={
// The current version of jQuery being used
jquery:version,constructor:jQuery,
// The default length of a jQuery object is 0
length:0,toArray:function(){return slice.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(num){
// Return just the one element from the set
// Return all the elements in a clean array
return null!=num?num<0?this[num+this.length]:this[num]:slice.call(this)},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(elems){
// Build a new jQuery matched element set
var ret=jQuery.merge(this.constructor(),elems);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return ret.prevObject=this,ret},
// Execute a callback for every element in the matched set.
each:function(callback){return jQuery.each(this,callback)},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem)}))},slice:function(){return this.pushStack(slice.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:push,sort:arr.sort,splice:arr.splice},jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=!1;for(
// Handle a deep copy situation
"boolean"==typeof target&&(deep=target,
// Skip the boolean and the target
target=arguments[i]||{},i++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof target||jQuery.isFunction(target)||(target={}),
// Extend jQuery itself if only one argument is passed
i===length&&(target=this,i--);i<length;i++)
// Only deal with non-null/undefined values
if(null!=(options=arguments[i]))
// Extend the base object
for(name in options)src=target[name],copy=options[name],
// Prevent never-ending loop
target!==copy&&(
// Recurse if we're merging plain objects or arrays
deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))?(copyIsArray?(copyIsArray=!1,clone=src&&jQuery.isArray(src)?src:[]):clone=src&&jQuery.isPlainObject(src)?src:{},
// Never move original objects, clone them
target[name]=jQuery.extend(deep,clone,copy)):void 0!==copy&&(target[name]=copy));
// Return the modified object
return target},jQuery.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(msg){throw new Error(msg)},noop:function(){},isFunction:function(obj){return"function"===jQuery.type(obj)},isArray:Array.isArray,isWindow:function(obj){return null!=obj&&obj===obj.window},isNumeric:function(obj){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var type=jQuery.type(obj);
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
return("number"===type||"string"===type)&&!isNaN(obj-parseFloat(obj))},isPlainObject:function(obj){var proto,Ctor;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Objects with no prototype (e.g., `Object.create( null )`) are plain
// Objects with prototype are plain iff they were constructed by a global Object function
return!(!obj||"[object Object]"!==toString.call(obj))&&(!(proto=getProto(obj))||(Ctor=hasOwn.call(proto,"constructor")&&proto.constructor,"function"==typeof Ctor&&fnToString.call(Ctor)===ObjectFunctionString))},isEmptyObject:function(obj){/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var name;for(name in obj)return!1;return!0},type:function(obj){return null==obj?obj+"":"object"==typeof obj||"function"==typeof obj?class2type[toString.call(obj)]||"object":typeof obj},
// Evaluates a script in a global context
globalEval:function(code){DOMEval(code)},
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 13
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase()},each:function(obj,callback){var length,i=0;if(isArrayLike(obj))for(length=obj.length;i<length&&callback.call(obj[i],i,obj[i])!==!1;i++);else for(i in obj)if(callback.call(obj[i],i,obj[i])===!1)break;return obj},
// Support: Android <=4.0 only
trim:function(text){return null==text?"":(text+"").replace(rtrim,"")},
// results is for internal usage only
makeArray:function(arr,results){var ret=results||[];return null!=arr&&(isArrayLike(Object(arr))?jQuery.merge(ret,"string"==typeof arr?[arr]:arr):push.call(ret,arr)),ret},inArray:function(elem,arr,i){return null==arr?-1:indexOf.call(arr,elem,i)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(first,second){for(var len=+second.length,j=0,i=first.length;j<len;j++)first[i++]=second[j];return first.length=i,first},grep:function(elems,callback,invert){
// Go through the array, only saving the items
// that pass the validator function
for(var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;i<length;i++)callbackInverse=!callback(elems[i],i),callbackInverse!==callbackExpect&&matches.push(elems[i]);return matches},
// arg is for internal usage only
map:function(elems,callback,arg){var length,value,i=0,ret=[];
// Go through the array, translating each of the items to their new values
if(isArrayLike(elems))for(length=elems.length;i<length;i++)value=callback(elems[i],i,arg),null!=value&&ret.push(value);else for(i in elems)value=callback(elems[i],i,arg),null!=value&&ret.push(value);
// Flatten any nested arrays
return concat.apply([],ret)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(fn,context){var tmp,args,proxy;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof context&&(tmp=fn[context],context=fn,fn=tmp),jQuery.isFunction(fn))
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return args=slice.call(arguments,2),proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)))},proxy.guid=fn.guid=fn.guid||jQuery.guid++,proxy},now:Date.now,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:support}),"function"==typeof Symbol&&(jQuery.fn[Symbol.iterator]=arr[Symbol.iterator]),
// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase()});var Sizzle=/*!
 * Sizzle CSS Selector Engine v2.3.0
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-04
 */
function(window){function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,
// nodeType defaults to 9, since context defaults to document
nodeType=context?context.nodeType:9;
// Return early from calls with invalid selector or context
if(results=results||[],"string"!=typeof selector||!selector||1!==nodeType&&9!==nodeType&&11!==nodeType)return results;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!seed&&((context?context.ownerDocument||context:preferredDoc)!==document&&setDocument(context),context=context||document,documentIsHTML)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==nodeType&&(match=rquickExpr.exec(selector)))
// ID selector
if(m=match[1]){
// Document context
if(9===nodeType){if(!(elem=context.getElementById(m)))return results;
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(elem.id===m)return results.push(elem),results}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m)return results.push(elem),results}else{if(match[2])return push.apply(results,context.getElementsByTagName(selector)),results;if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName)return push.apply(results,context.getElementsByClassName(m)),results}
// Take advantage of querySelectorAll
if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(1!==nodeType)newContext=context,newSelector=selector;else if("object"!==context.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(nid=context.getAttribute("id"))?nid=nid.replace(rcssescape,fcssescape):context.setAttribute("id",nid=expando),
// Prefix every selector in the list
groups=tokenize(selector),i=groups.length;i--;)groups[i]="#"+nid+" "+toSelector(groups[i]);newSelector=groups.join(","),
// Expand context for sibling selectors
newContext=rsibling.test(selector)&&testContext(context.parentNode)||context}if(newSelector)try{return push.apply(results,newContext.querySelectorAll(newSelector)),results}catch(qsaError){}finally{nid===expando&&context.removeAttribute("id")}}}
// All others
return select(selector.replace(rtrim,"$1"),context,results,seed)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache(){function cache(key,value){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return keys.push(key+" ")>Expr.cacheLength&&delete cache[keys.shift()],cache[key+" "]=value}var keys=[];return cache}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction(fn){return fn[expando]=!0,fn}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el)}catch(e){return!1}finally{
// Remove from its parent by default
el.parentNode&&el.parentNode.removeChild(el),
// release memory in IE
el=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle(attrs,handler){for(var arr=attrs.split("|"),i=arr.length;i--;)Expr.attrHandle[arr[i]]=handler}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck(a,b){var cur=b&&a,diff=cur&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(diff)return diff;
// Check if b follows a
if(cur)for(;cur=cur.nextSibling;)if(cur===b)return-1;return a?1:-1}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return"input"===name&&elem.type===type}}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return("input"===name||"button"===name)&&elem.type===type}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo(disabled){
// Known :disabled false positives:
// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(elem){
// Check form elements and option elements for explicit disabling
// Check non-disabled form elements for fieldset[disabled] ancestors
// Support: IE6-11+
// Ancestry is covered for us
// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
/* jshint -W018 */
return"label"in elem&&elem.disabled===disabled||"form"in elem&&elem.disabled===disabled||"form"in elem&&elem.disabled===!1&&(elem.isDisabled===disabled||elem.isDisabled!==!disabled&&("label"in elem||!disabledAncestor(elem))!==disabled)}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo(fn){return markFunction(function(argument){return argument=+argument,markFunction(function(seed,matches){
// Match elements found at the specified indexes
for(var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;i--;)seed[j=matchIndexes[i]]&&(seed[j]=!(matches[j]=seed[j]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext(context){return context&&"undefined"!=typeof context.getElementsByTagName&&context}
// Easy API for creating new setFilters
function setFilters(){}function toSelector(tokens){for(var i=0,len=tokens.length,selector="";i<len;i++)selector+=tokens[i].value;return selector}function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&"parentNode"===key,doneName=done++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return combinator.first?function(elem,context,xml){for(;elem=elem[dir];)if(1===elem.nodeType||checkNonElements)return matcher(elem,context,xml)}:function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(xml){for(;elem=elem[dir];)if((1===elem.nodeType||checkNonElements)&&matcher(elem,context,xml))return!0}else for(;elem=elem[dir];)if(1===elem.nodeType||checkNonElements)if(outerCache=elem[expando]||(elem[expando]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={}),skip&&skip===elem.nodeName.toLowerCase())elem=elem[dir]||elem;else{if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName)
// Assign to newCache so results back-propagate to previous elements
return newCache[2]=oldCache[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
uniqueCache[key]=newCache,newCache[2]=matcher(elem,context,xml))return!0}}}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){for(var i=matchers.length;i--;)if(!matchers[i](elem,context,xml))return!1;return!0}:matchers[0]}function multipleContexts(selector,contexts,results){for(var i=0,len=contexts.length;i<len;i++)Sizzle(selector,contexts[i],results);return results}function condense(unmatched,map,filter,context,xml){for(var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=null!=map;i<len;i++)(elem=unmatched[i])&&(filter&&!filter(elem,context,xml)||(newUnmatched.push(elem),mapped&&map.push(i)));return newUnmatched}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){return postFilter&&!postFilter[expando]&&(postFilter=setMatcher(postFilter)),postFinder&&!postFinder[expando]&&(postFinder=setMatcher(postFinder,postSelector)),markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,
// Get initial elements from seed or context
elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
matcherIn=!preFilter||!seed&&selector?elems:condense(elems,preMap,preFilter,context,xml),matcherOut=matcher?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
postFinder||(seed?preFilter:preexisting||postFilter)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
results:matcherIn;
// Apply postFilter
if(
// Find primary matches
matcher&&matcher(matcherIn,matcherOut,context,xml),postFilter)for(temp=condense(matcherOut,postMap),postFilter(temp,[],context,xml),
// Un-match failing elements by moving them back to matcherIn
i=temp.length;i--;)(elem=temp[i])&&(matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem));if(seed){if(postFinder||preFilter){if(postFinder){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
temp=[],i=matcherOut.length;i--;)(elem=matcherOut[i])&&
// Restore matcherIn since elem is not yet a final match
temp.push(matcherIn[i]=elem);postFinder(null,matcherOut=[],temp,xml)}for(
// Move matched elements from seed to results to keep them synchronized
i=matcherOut.length;i--;)(elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1&&(seed[temp]=!(results[temp]=elem))}}else matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut),postFinder?postFinder(null,results,matcherOut,xml):push.apply(results,matcherOut)})}function matcherFromTokens(tokens){for(var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
matchContext=addCombinator(function(elem){return elem===checkContext},implicitRelative,!0),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1},implicitRelative,!0),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));
// Avoid hanging onto element (issue #299)
return checkContext=null,ret}];i<len;i++)if(matcher=Expr.relative[tokens[i].type])matchers=[addCombinator(elementMatcher(matchers),matcher)];else{
// Return special upon seeing a positional matcher
if(matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches),matcher[expando]){for(
// Find the next relative operator (if any) for proper handling
j=++i;j<len&&!Expr.relative[tokens[j].type];j++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:" "===tokens[i-2].type?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens))}matchers.push(matcher)}return elementMatcher(matchers)}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,
// We must always have either seed elements or outermost context
elems=seed||byElement&&Expr.find.TAG("*",outermost),
// Use integer dirruns iff this is the outermost matcher
dirrunsUnique=dirruns+=null==contextBackup?1:Math.random()||.1,len=elems.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(outermost&&(outermostContext=context===document||context||outermost);i!==len&&null!=(elem=elems[i]);i++){if(byElement&&elem){for(j=0,context||elem.ownerDocument===document||(setDocument(elem),xml=!documentIsHTML);matcher=elementMatchers[j++];)if(matcher(elem,context||document,xml)){results.push(elem);break}outermost&&(dirruns=dirrunsUnique)}
// Track unmatched elements for set filters
bySet&&(
// They will have gone through all possible matchers
(elem=!matcher&&elem)&&matchedCount--,
// Lengthen the array for every element, matched or not
seed&&unmatched.push(elem))}
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
matchedCount+=i,bySet&&i!==matchedCount){for(j=0;matcher=setMatchers[j++];)matcher(unmatched,setMatched,context,xml);if(seed){
// Reintegrate element matches to eliminate the need for sorting
if(matchedCount>0)for(;i--;)unmatched[i]||setMatched[i]||(setMatched[i]=pop.call(results));
// Discard index placeholder values to get only actual matches
setMatched=condense(setMatched)}
// Add matches to results
push.apply(results,setMatched),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1&&Sizzle.uniqueSort(results)}
// Override manipulation of globals by nested matchers
return outermost&&(dirruns=dirrunsUnique,outermostContext=contextBackup),unmatched};return bySet?markFunction(superMatcher):superMatcher}var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,
// Local document vars
setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,
// Instance-specific data
expando="sizzle"+1*new Date,preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){return a===b&&(hasDuplicate=!0),0},
// Instance methods
hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
indexOf=function(list,elem){for(var i=0,len=list.length;i<len;i++)if(list[i]===elem)return i;return-1},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
whitespace="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+
// Operator (capture 2)
"*([*^$|!~]?=)"+whitespace+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={ID:new RegExp("^#("+identifier+")"),CLASS:new RegExp("^\\.("+identifier+")"),TAG:new RegExp("^("+identifier+"|[*])"),ATTR:new RegExp("^"+attributes),PSEUDO:new RegExp("^"+pseudos),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),bool:new RegExp("^(?:"+booleans+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+65536):String.fromCharCode(high>>10|55296,1023&high|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,fcssescape=function(ch,asCodePoint){
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
return asCodePoint?"\0"===ch?"�":ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ":"\\"+ch},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
unloadHandler=function(){setDocument()},disabledAncestor=addCombinator(function(elem){return elem.disabled===!0},{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
arr[preferredDoc.childNodes.length].nodeType}catch(e){push={apply:arr.length?
// Leverage slice if possible
function(target,els){push_native.apply(target,slice.call(els))}:
// Support: IE<9
// Otherwise append directly
function(target,els){
// Can't trust NodeList.length
for(var j=target.length,i=0;target[j++]=els[i++];);target.length=j-1}}}
// Expose support vars for convenience
support=Sizzle.support={},/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML=Sizzle.isXML=function(elem){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return!!documentElement&&"HTML"!==documentElement.nodeName},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;
// Return early if doc is invalid or already selected
// Return early if doc is invalid or already selected
// Update global variables
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
// Support: IE 11, Edge
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Support: IE<9
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
// ID find and filter
// Support: IE6/7
// getElementById is not reliable as a find shortcut
// Tag
// Class
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
	---------------------------------------------------------------------- */
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
return doc!==document&&9===doc.nodeType&&doc.documentElement?(document=doc,docElem=document.documentElement,documentIsHTML=!isXML(document),preferredDoc!==document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow&&(subWindow.addEventListener?subWindow.addEventListener("unload",unloadHandler,!1):subWindow.attachEvent&&subWindow.attachEvent("onunload",unloadHandler)),support.attributes=assert(function(el){return el.className="i",!el.getAttribute("className")}),support.getElementsByTagName=assert(function(el){return el.appendChild(document.createComment("")),!el.getElementsByTagName("*").length}),support.getElementsByClassName=rnative.test(document.getElementsByClassName),support.getById=assert(function(el){return docElem.appendChild(el).id=expando,!document.getElementsByName||!document.getElementsByName(expando).length}),support.getById?(Expr.find.ID=function(id,context){if("undefined"!=typeof context.getElementById&&documentIsHTML){var m=context.getElementById(id);return m?[m]:[]}},Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId}}):(delete Expr.find.ID,Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node="undefined"!=typeof elem.getAttributeNode&&elem.getAttributeNode("id");return node&&node.value===attrId}}),Expr.find.TAG=support.getElementsByTagName?function(tag,context){return"undefined"!=typeof context.getElementsByTagName?context.getElementsByTagName(tag):support.qsa?context.querySelectorAll(tag):void 0}:function(tag,context){var elem,tmp=[],i=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
results=context.getElementsByTagName(tag);
// Filter out possible comments
if("*"===tag){for(;elem=results[i++];)1===elem.nodeType&&tmp.push(elem);return tmp}return results},Expr.find.CLASS=support.getElementsByClassName&&function(className,context){if("undefined"!=typeof context.getElementsByClassName&&documentIsHTML)return context.getElementsByClassName(className)},rbuggyMatches=[],rbuggyQSA=[],(support.qsa=rnative.test(document.querySelectorAll))&&(assert(function(el){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a><select id='"+expando+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
el.querySelectorAll("[msallowcapture^='']").length&&rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
el.querySelectorAll("[selected]").length||rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
el.querySelectorAll("[id~="+expando+"-]").length||rbuggyQSA.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
el.querySelectorAll(":checked").length||rbuggyQSA.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
el.querySelectorAll("a#"+expando+"+*").length||rbuggyQSA.push(".#.+[+~]")}),assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var input=document.createElement("input");input.setAttribute("type","hidden"),el.appendChild(input).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
el.querySelectorAll("[name=d]").length&&rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==el.querySelectorAll(":enabled").length&&rbuggyQSA.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
docElem.appendChild(el).disabled=!0,2!==el.querySelectorAll(":disabled").length&&rbuggyQSA.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
el.querySelectorAll("*,:x"),rbuggyQSA.push(",.*:")})),(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector))&&assert(function(el){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
support.disconnectedMatch=matches.call(el,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
matches.call(el,"[s!='']:x"),rbuggyMatches.push("!=",pseudos)}),rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|")),rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|")),hasCompare=rnative.test(docElem.compareDocumentPosition),contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=9===a.nodeType?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!(!bup||1!==bup.nodeType||!(adown.contains?adown.contains(bup):a.compareDocumentPosition&&16&a.compareDocumentPosition(bup)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},sortOrder=hasCompare?function(a,b){
// Flag for duplicate removal
if(a===b)return hasDuplicate=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;
// Calculate position if both inputs belong to the same document
// Otherwise we know they are disconnected
// Disconnected nodes
// Choose the first element that is related to our preferred document
return compare?compare:(compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&compare||!support.sortDetached&&b.compareDocumentPosition(a)===compare?a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)?-1:b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0:4&compare?-1:1)}:function(a,b){
// Exit early if the nodes are identical
if(a===b)return hasDuplicate=!0,0;var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];
// Parentless nodes are either documents or disconnected
if(!aup||!bup)return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;if(aup===bup)return siblingCheck(a,b);for(
// Otherwise we need full lists of their ancestors for comparison
cur=a;cur=cur.parentNode;)ap.unshift(cur);for(cur=b;cur=cur.parentNode;)bp.unshift(cur);
// Walk down the tree looking for a discrepancy
for(;ap[i]===bp[i];)i++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0},document):document},Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements)},Sizzle.matchesSelector=function(elem,expr){if(
// Set document vars if needed
(elem.ownerDocument||elem)!==document&&setDocument(elem),
// Make sure that attribute selectors are quoted
expr=expr.replace(rattributeQuotes,"='$1']"),support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr)))try{var ret=matches.call(elem,expr);
// IE 9's matchesSelector returns false on disconnected nodes
if(ret||support.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
elem.document&&11!==elem.document.nodeType)return ret}catch(e){}return Sizzle(expr,document,null,[elem]).length>0},Sizzle.contains=function(context,elem){
// Set document vars if needed
return(context.ownerDocument||context)!==document&&setDocument(context),contains(context,elem)},Sizzle.attr=function(elem,name){
// Set document vars if needed
(elem.ownerDocument||elem)!==document&&setDocument(elem);var fn=Expr.attrHandle[name.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):void 0;return void 0!==val?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null},Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape)},Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;if(
// Unless we *know* we can detect duplicates, assume their presence
hasDuplicate=!support.detectDuplicates,sortInput=!support.sortStable&&results.slice(0),results.sort(sortOrder),hasDuplicate){for(;elem=results[i++];)elem===results[i]&&(j=duplicates.push(i));for(;j--;)results.splice(duplicates[j],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return sortInput=null,results},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(nodeType){if(1===nodeType||9===nodeType||11===nodeType){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof elem.textContent)return elem.textContent;
// Traverse its children
for(elem=elem.firstChild;elem;elem=elem.nextSibling)ret+=getText(elem)}else if(3===nodeType||4===nodeType)return elem.nodeValue}else
// If no nodeType, this is expected to be an array
for(;node=elem[i++];)
// Do not traverse comment nodes
ret+=getText(node);
// Do not include comment or processing instruction nodes
return ret},Expr=Sizzle.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(match){
// Move the given value to match[3] whether quoted or unquoted
return match[1]=match[1].replace(runescape,funescape),match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape),"~="===match[2]&&(match[3]=" "+match[3]+" "),match.slice(0,4)},CHILD:function(match){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return match[1]=match[1].toLowerCase(),"nth"===match[1].slice(0,3)?(match[3]||Sizzle.error(match[0]),match[4]=+(match[4]?match[5]+(match[6]||1):2*("even"===match[3]||"odd"===match[3])),match[5]=+(match[7]+match[8]||"odd"===match[3])):match[3]&&Sizzle.error(match[0]),match},PSEUDO:function(match){var excess,unquoted=!match[6]&&match[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return matchExpr.CHILD.test(match[0])?null:(match[3]?match[2]=match[4]||match[5]||"":unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,!0))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)&&(match[0]=match[0].slice(0,excess),match[2]=unquoted.slice(0,excess)),match.slice(0,3))}},filter:{TAG:function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return"*"===nodeNameSelector?function(){return!0}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName}},CLASS:function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test("string"==typeof elem.className&&elem.className||"undefined"!=typeof elem.getAttribute&&elem.getAttribute("class")||"")})},ATTR:function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);return null==result?"!="===operator:!operator||(result+="","="===operator?result===check:"!="===operator?result!==check:"^="===operator?check&&0===result.indexOf(check):"*="===operator?check&&result.indexOf(check)>-1:"$="===operator?check&&result.slice(-check.length)===check:"~="===operator?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:"|="===operator&&(result===check||result.slice(0,check.length+1)===check+"-"))}},CHILD:function(type,what,argument,first,last){var simple="nth"!==type.slice(0,3),forward="last"!==type.slice(-4),ofType="of-type"===what;
// Shortcut for :nth-*(n)
return 1===first&&0===last?function(elem){return!!elem.parentNode}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=!1;if(parent){
// :(first|last|only)-(child|of-type)
if(simple){for(;dir;){for(node=elem;node=node[dir];)if(ofType?node.nodeName.toLowerCase()===name:1===node.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
start=dir="only"===type&&!start&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(start=[forward?parent.firstChild:parent.lastChild],forward&&useCache){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
node=parent,outerCache=node[expando]||(node[expando]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={}),cache=uniqueCache[type]||[],nodeIndex=cache[0]===dirruns&&cache[1],diff=nodeIndex&&cache[2],node=nodeIndex&&parent.childNodes[nodeIndex];node=++nodeIndex&&node&&node[dir]||(
// Fallback to seeking `elem` from the start
diff=nodeIndex=0)||start.pop();)
// When found, cache indexes on `parent` and break
if(1===node.nodeType&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
useCache&&(
// ...in a gzip-friendly way
node=elem,outerCache=node[expando]||(node[expando]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={}),cache=uniqueCache[type]||[],nodeIndex=cache[0]===dirruns&&cache[1],diff=nodeIndex),diff===!1)
// Use the same loop as above to seek `elem` from the start
for(;(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())&&((ofType?node.nodeName.toLowerCase()!==name:1!==node.nodeType)||!++diff||(
// Cache the index of each encountered element
useCache&&(outerCache=node[expando]||(node[expando]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={}),uniqueCache[type]=[dirruns,diff]),node!==elem)););
// Incorporate the offset, then check against cycle size
return diff-=last,diff===first||diff%first===0&&diff/first>=0}}},PSEUDO:function(pseudo,argument){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return fn[expando]?fn(argument):fn.length>1?(args=[pseudo,pseudo,"",argument],Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){for(var idx,matched=fn(seed,argument),i=matched.length;i--;)idx=indexOf(seed,matched[i]),seed[idx]=!(matches[idx]=matched[i])}):function(elem){return fn(elem,0,args)}):fn}},pseudos:{
// Potentially complex pseudos
not:markFunction(function(selector){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){
// Match elements unmatched by `matcher`
for(var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;i--;)(elem=unmatched[i])&&(seed[i]=!(matches[i]=elem))}):function(elem,context,xml){
// Don't keep the element (issue #299)
return input[0]=elem,matcher(input,null,xml,results),input[0]=null,!results.pop()}}),has:markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0}}),contains:markFunction(function(text){return text=text.replace(runescape,funescape),function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:markFunction(function(lang){
// lang value must be a valid identifier
return ridentifier.test(lang||"")||Sizzle.error("unsupported lang: "+lang),lang=lang.replace(runescape,funescape).toLowerCase(),function(elem){var elemLang;do if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))return elemLang=elemLang.toLowerCase(),elemLang===lang||0===elemLang.indexOf(lang+"-");while((elem=elem.parentNode)&&1===elem.nodeType);return!1}}),
// Miscellaneous
target:function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id},root:function(elem){return elem===docElem},focus:function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex)},
// Boolean properties
enabled:createDisabledPseudo(!1),disabled:createDisabledPseudo(!0),checked:function(elem){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var nodeName=elem.nodeName.toLowerCase();return"input"===nodeName&&!!elem.checked||"option"===nodeName&&!!elem.selected},selected:function(elem){
// Accessing this property makes selected-by-default
// options in Safari work properly
return elem.parentNode&&elem.parentNode.selectedIndex,elem.selected===!0},
// Contents
empty:function(elem){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(elem=elem.firstChild;elem;elem=elem.nextSibling)if(elem.nodeType<6)return!1;return!0},parent:function(elem){return!Expr.pseudos.empty(elem)},
// Element/input types
header:function(elem){return rheader.test(elem.nodeName)},input:function(elem){return rinputs.test(elem.nodeName)},button:function(elem){var name=elem.nodeName.toLowerCase();return"input"===name&&"button"===elem.type||"button"===name},text:function(elem){var attr;
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return"input"===elem.nodeName.toLowerCase()&&"text"===elem.type&&(null==(attr=elem.getAttribute("type"))||"text"===attr.toLowerCase())},
// Position-in-collection
first:createPositionalPseudo(function(){return[0]}),last:createPositionalPseudo(function(matchIndexes,length){return[length-1]}),eq:createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument]}),even:createPositionalPseudo(function(matchIndexes,length){for(var i=0;i<length;i+=2)matchIndexes.push(i);return matchIndexes}),odd:createPositionalPseudo(function(matchIndexes,length){for(var i=1;i<length;i+=2)matchIndexes.push(i);return matchIndexes}),lt:createPositionalPseudo(function(matchIndexes,length,argument){for(var i=argument<0?argument+length:argument;--i>=0;)matchIndexes.push(i);return matchIndexes}),gt:createPositionalPseudo(function(matchIndexes,length,argument){for(var i=argument<0?argument+length:argument;++i<length;)matchIndexes.push(i);return matchIndexes})}},Expr.pseudos.nth=Expr.pseudos.eq;
// Add button/input type pseudos
for(i in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})Expr.pseudos[i]=createInputPseudo(i);for(i in{submit:!0,reset:!0})Expr.pseudos[i]=createButtonPseudo(i);/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
// One-time assignments
// Sort stability
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return setFilters.prototype=Expr.filters=Expr.pseudos,Expr.setFilters=new setFilters,tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached)return parseOnly?0:cached.slice(0);for(soFar=selector,groups=[],preFilters=Expr.preFilter;soFar;){
// Comma and first run
matched&&!(match=rcomma.exec(soFar))||(match&&(
// Don't consume trailing commas as valid
soFar=soFar.slice(match[0].length)||soFar),groups.push(tokens=[])),matched=!1,
// Combinators
(match=rcombinators.exec(soFar))&&(matched=match.shift(),tokens.push({value:matched,
// Cast descendant combinators to space
type:match[0].replace(rtrim," ")}),soFar=soFar.slice(matched.length));
// Filters
for(type in Expr.filter)!(match=matchExpr[type].exec(soFar))||preFilters[type]&&!(match=preFilters[type](match))||(matched=match.shift(),tokens.push({value:matched,type:type,matches:match}),soFar=soFar.slice(matched.length));if(!matched)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0)},compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){for(
// Generate a function of recursive functions that can be used to check each element
match||(match=tokenize(selector)),i=match.length;i--;)cached=matcherFromTokens(match[i]),cached[expando]?setMatchers.push(cached):elementMatchers.push(cached);
// Cache the compiled function
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers)),
// Save selector and tokenization
cached.selector=selector}return cached},select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled="function"==typeof selector&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(results=results||[],1===match.length){if(
// Reduce context if the leading compound selector is an ID
tokens=match[0]=match[0].slice(0),tokens.length>2&&"ID"===(token=tokens[0]).type&&support.getById&&9===context.nodeType&&documentIsHTML&&Expr.relative[tokens[1].type]){if(context=(Expr.find.ID(token.matches[0].replace(runescape,funescape),context)||[])[0],!context)return results;compiled&&(context=context.parentNode),selector=selector.slice(tokens.shift().value.length)}for(
// Fetch a seed set for right-to-left matching
i=matchExpr.needsContext.test(selector)?0:tokens.length;i--&&(token=tokens[i],!Expr.relative[type=token.type]);)if((find=Expr.find[type])&&(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){if(
// If seed is empty or no tokens remain, we can return early
tokens.splice(i,1),selector=seed.length&&toSelector(tokens),!selector)return push.apply(results,seed),results;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context),results},support.sortStable=expando.split("").sort(sortOrder).join("")===expando,support.detectDuplicates=!!hasDuplicate,setDocument(),support.sortDetached=assert(function(el){
// Should return 1, but returns 4 (following)
return 1&el.compareDocumentPosition(document.createElement("fieldset"))}),assert(function(el){return el.innerHTML="<a href='#'></a>","#"===el.firstChild.getAttribute("href")})||addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML)return elem.getAttribute(name,"type"===name.toLowerCase()?1:2)}),support.attributes&&assert(function(el){return el.innerHTML="<input/>",el.firstChild.setAttribute("value",""),""===el.firstChild.getAttribute("value")})||addHandle("value",function(elem,name,isXML){if(!isXML&&"input"===elem.nodeName.toLowerCase())return elem.defaultValue}),assert(function(el){return null==el.getAttribute("disabled")})||addHandle(booleans,function(elem,name,isXML){var val;if(!isXML)return elem[name]===!0?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null}),Sizzle}(window);jQuery.find=Sizzle,jQuery.expr=Sizzle.selectors,
// Deprecated
jQuery.expr[":"]=jQuery.expr.pseudos,jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort,jQuery.text=Sizzle.getText,jQuery.isXMLDoc=Sizzle.isXML,jQuery.contains=Sizzle.contains,jQuery.escapeSelector=Sizzle.escape;var dir=function(elem,dir,until){for(var matched=[],truncate=void 0!==until;(elem=elem[dir])&&9!==elem.nodeType;)if(1===elem.nodeType){if(truncate&&jQuery(elem).is(until))break;matched.push(elem)}return matched},siblings=function(n,elem){for(var matched=[];n;n=n.nextSibling)1===n.nodeType&&n!==elem&&matched.push(n);return matched},rneedsContext=jQuery.expr.match.needsContext,rsingleTag=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,risSimple=/^.[^:#\[\.,]*$/;jQuery.filter=function(expr,elems,not){var elem=elems[0];return not&&(expr=":not("+expr+")"),1===elems.length&&1===elem.nodeType?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return 1===elem.nodeType}))},jQuery.fn.extend({find:function(selector){var i,ret,len=this.length,self=this;if("string"!=typeof selector)return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++)if(jQuery.contains(self[i],this))return!0}));for(ret=this.pushStack([]),i=0;i<len;i++)jQuery.find(selector,self[i],ret);return len>1?jQuery.uniqueSort(ret):ret},filter:function(selector){return this.pushStack(winnow(this,selector||[],!1))},not:function(selector){return this.pushStack(winnow(this,selector||[],!0))},is:function(selector){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!winnow(this,"string"==typeof selector&&rneedsContext.test(selector)?jQuery(selector):selector||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var rootjQuery,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!selector)return this;
// Handle HTML strings
if(
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
root=root||rootjQuery,"string"==typeof selector){
// Match html or make sure no context is specified for #id
if(
// Assume that strings that start and end with <> are HTML and skip the regex check
match="<"===selector[0]&&">"===selector[selector.length-1]&&selector.length>=3?[null,selector,null]:rquickExpr.exec(selector),!match||!match[1]&&context)return!context||context.jquery?(context||root).find(selector):this.constructor(context).find(selector);
// HANDLE: $(html) -> $(array)
if(match[1]){
// HANDLE: $(html, props)
if(context=context instanceof jQuery?context[0]:context,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,!0)),rsingleTag.test(match[1])&&jQuery.isPlainObject(context))for(match in context)
// Properties of context are called as methods if possible
jQuery.isFunction(this[match])?this[match](context[match]):this.attr(match,context[match]);return this}
// Inject the element directly into the jQuery object
return elem=document.getElementById(match[2]),elem&&(this[0]=elem,this.length=1),this}
// Execute immediately if ready is not present
return selector.nodeType?(this[0]=selector,this.length=1,this):jQuery.isFunction(selector)?void 0!==root.ready?root.ready(selector):selector(jQuery):jQuery.makeArray(selector,this)};
// Give the init function the jQuery prototype for later instantiation
init.prototype=jQuery.fn,
// Initialize central reference
rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
guaranteedUnique={children:!0,contents:!0,next:!0,prev:!0};jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){for(var i=0;i<l;i++)if(jQuery.contains(this,targets[i]))return!0})},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],targets="string"!=typeof selectors&&jQuery(selectors);
// Positional selectors never match, since there's no _selection_ context
if(!rneedsContext.test(selectors))for(;i<l;i++)for(cur=this[i];cur&&cur!==context;cur=cur.parentNode)
// Always skip document fragments
if(cur.nodeType<11&&(targets?targets.index(cur)>-1:
// Don't pass non-elements to Sizzle
1===cur.nodeType&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched)},
// Determine the position of an element within the set
index:function(elem){
// No argument, return index in parent
// No argument, return index in parent
// Index in selector
// If it receives a jQuery object, the first element is used
return elem?"string"==typeof elem?indexOf.call(jQuery(elem),this[0]):indexOf.call(this,elem.jquery?elem[0]:elem):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))))},addBack:function(selector){return this.add(null==selector?this.prevObject:this.prevObject.filter(selector))}}),jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&11!==parent.nodeType?parent:null},parents:function(elem){return dir(elem,"parentNode")},parentsUntil:function(elem,i,until){return dir(elem,"parentNode",until)},next:function(elem){return sibling(elem,"nextSibling")},prev:function(elem){return sibling(elem,"previousSibling")},nextAll:function(elem){return dir(elem,"nextSibling")},prevAll:function(elem){return dir(elem,"previousSibling")},nextUntil:function(elem,i,until){return dir(elem,"nextSibling",until)},prevUntil:function(elem,i,until){return dir(elem,"previousSibling",until)},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem)},children:function(elem){return siblings(elem.firstChild)},contents:function(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes)}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==name.slice(-5)&&(selector=until),selector&&"string"==typeof selector&&(matched=jQuery.filter(selector,matched)),this.length>1&&(guaranteedUnique[name]||jQuery.uniqueSort(matched),rparentsprev.test(name)&&matched.reverse()),this.pushStack(matched)}});var rnotwhite=/\S+/g;/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks=function(options){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
options="string"==typeof options?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
firing,
// Last fire value for non-forgettable lists
memory,
// Flag to know if list was already fired
fired,
// Flag to prevent firing
locked,
// Actual callback list
list=[],
// Queue of execution data for repeatable lists
queue=[],
// Index of currently firing callback (modified by add/remove as needed)
firingIndex=-1,
// Fire callbacks
fire=function(){for(
// Enforce single-firing
locked=options.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
fired=firing=!0;queue.length;firingIndex=-1)for(memory=queue.shift();++firingIndex<list.length;)
// Run callback and check for early termination
list[firingIndex].apply(memory[0],memory[1])===!1&&options.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
firingIndex=list.length,memory=!1);
// Forget the data if we're done with it
options.memory||(memory=!1),firing=!1,
// Clean up if we're done firing for good
locked&&(
// Keep an empty list if we have data for future add calls
list=memory?[]:"")},
// Actual Callbacks object
self={
// Add a callback or a collection of callbacks to the list
add:function(){
// If we have memory from a past run, we should fire after adding
return list&&(memory&&!firing&&(firingIndex=list.length-1,queue.push(memory)),function add(args){jQuery.each(args,function(_,arg){jQuery.isFunction(arg)?options.unique&&self.has(arg)||list.push(arg):arg&&arg.length&&"string"!==jQuery.type(arg)&&
// Inspect recursively
add(arg)})}(arguments),memory&&!firing&&fire()),this},
// Remove a callback from the list
remove:function(){return jQuery.each(arguments,function(_,arg){for(var index;(index=jQuery.inArray(arg,list,index))>-1;)list.splice(index,1),
// Handle firing indexes
index<=firingIndex&&firingIndex--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0},
// Remove all callbacks from the list
empty:function(){return list&&(list=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return locked=queue=[],list=memory="",this},disabled:function(){return!list},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return locked=queue=[],memory||firing||(list=memory=""),this},locked:function(){return!!locked},
// Call all callbacks with the given context and arguments
fireWith:function(context,args){return locked||(args=args||[],args=[context,args.slice?args.slice():args],queue.push(args),firing||fire()),this},
// Call all the callbacks with the given arguments
fire:function(){return self.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!fired}};return self},jQuery.extend({Deferred:function(func){var tuples=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],state="pending",promise={state:function(){return state},always:function(){return deferred.done(arguments).fail(arguments),this},"catch":function(fn){return promise.then(null,fn)},
// Keep pipe for back-compat
pipe:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var fn=jQuery.isFunction(fns[tuple[4]])&&fns[tuple[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);returned&&jQuery.isFunction(returned.promise)?returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject):newDefer[tuple[0]+"With"](this,fn?[returned]:arguments)})}),fns=null}).promise()},then:function(onFulfilled,onRejected,onProgress){function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function(){var returned,then;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(depth<maxDepth)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if(returned=handler.apply(that,args),returned===deferred.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
then=returned&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof returned||"function"==typeof returned)&&returned.then,
// Handle a returned thenable
jQuery.isFunction(then)?
// Special processors (notify) just wait for resolution
special?then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special)):(
// ...and disregard older resolution values
maxDepth++,then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
handler!==Identity&&(that=void 0,args=[returned]),
// Process the value(s)
// Default process is resolve
(special||deferred.resolveWith)(that,args))}},
// Only normal processors (resolve) catch and reject exceptions
process=special?mightThrow:function(){try{mightThrow()}catch(e){jQuery.Deferred.exceptionHook&&jQuery.Deferred.exceptionHook(e,process.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
depth+1>=maxDepth&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
handler!==Thrower&&(that=void 0,args=[e]),deferred.rejectWith(that,args))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
depth?process():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
jQuery.Deferred.getStackHook&&(process.stackTrace=jQuery.Deferred.getStackHook()),window.setTimeout(process))}}var maxDepth=0;return jQuery.Deferred(function(newDefer){
// progress_handlers.add( ... )
tuples[0][3].add(resolve(0,newDefer,jQuery.isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith)),
// fulfilled_handlers.add( ... )
tuples[1][3].add(resolve(0,newDefer,jQuery.isFunction(onFulfilled)?onFulfilled:Identity)),
// rejected_handlers.add( ... )
tuples[2][3].add(resolve(0,newDefer,jQuery.isFunction(onRejected)?onRejected:Thrower))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(obj){return null!=obj?jQuery.extend(obj,promise):promise}},deferred={};
// All done!
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
promise[tuple[1]]=list.add,
// Handle state
stateString&&list.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
state=stateString},
// rejected_callbacks.disable
// fulfilled_callbacks.disable
tuples[3-i][2].disable,
// progress_callbacks.lock
tuples[0][2].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
list.add(tuple[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
deferred[tuple[0]]=function(){return deferred[tuple[0]+"With"](this===deferred?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
deferred[tuple[0]+"With"]=list.fireWith}),promise.promise(deferred),func&&func.call(deferred,deferred),deferred},
// Deferred helper
when:function(singleValue){var
// count of uncompleted subordinates
remaining=arguments.length,
// count of unprocessed arguments
i=remaining,
// subordinate fulfillment data
resolveContexts=Array(i),resolveValues=slice.call(arguments),
// the master Deferred
master=jQuery.Deferred(),
// subordinate callback factory
updateFunc=function(i){return function(value){resolveContexts[i]=this,resolveValues[i]=arguments.length>1?slice.call(arguments):value,--remaining||master.resolveWith(resolveContexts,resolveValues)}};
// Single- and empty arguments are adopted like Promise.resolve
if(remaining<=1&&(adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject),"pending"===master.state()||jQuery.isFunction(resolveValues[i]&&resolveValues[i].then)))return master.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;i--;)adoptValue(resolveValues[i],updateFunc(i),master.reject);return master.promise()}});
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
window.console&&window.console.warn&&error&&rerrorNames.test(error.name)&&window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack)},jQuery.readyException=function(error){window.setTimeout(function(){throw error})};
// The deferred used on DOM ready
var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){return readyList.then(fn)["catch"](function(error){jQuery.readyException(error)}),this},jQuery.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Hold (or release) the ready event
holdReady:function(hold){hold?jQuery.readyWait++:jQuery.ready(!0)},
// Handle when the DOM is ready
ready:function(wait){
// Abort if there are pending holds or we're already ready
(wait===!0?--jQuery.readyWait:jQuery.isReady)||(
// Remember that the DOM is ready
jQuery.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
wait!==!0&&--jQuery.readyWait>0||
// If there are functions bound, to execute
readyList.resolveWith(document,[jQuery]))}}),jQuery.ready.then=readyList.then,
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
window.setTimeout(jQuery.ready):(
// Use the handy event callback
document.addEventListener("DOMContentLoaded",completed),
// A fallback to window.onload, that will always work
window.addEventListener("load",completed));
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=null==key;
// Sets many values
if("object"===jQuery.type(key)){chainable=!0;for(i in key)access(elems,fn,i,key[i],!0,emptyGet,raw)}else if(void 0!==value&&(chainable=!0,jQuery.isFunction(value)||(raw=!0),bulk&&(
// Bulk operations run against the entire set
raw?(fn.call(elems,value),fn=null):(bulk=fn,fn=function(elem,key,value){return bulk.call(jQuery(elem),value)})),fn))for(;i<len;i++)fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));
// Gets
return chainable?elems:bulk?fn.call(elems):len?fn(elems[0],key):emptyGet},acceptData=function(owner){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===owner.nodeType||9===owner.nodeType||!+owner.nodeType};Data.uid=1,Data.prototype={cache:function(owner){
// Check if the owner object already has a cache
var value=owner[this.expando];
// If not, create one
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
return value||(value={},acceptData(owner)&&(owner.nodeType?owner[this.expando]=value:Object.defineProperty(owner,this.expando,{value:value,configurable:!0}))),value},set:function(owner,data,value){var prop,cache=this.cache(owner);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof data)cache[jQuery.camelCase(data)]=value;else
// Copy the properties one-by-one to the cache object
for(prop in data)cache[jQuery.camelCase(prop)]=data[prop];return cache},get:function(owner,key){
// Always use camelCase key (gh-2257)
return void 0===key?this.cache(owner):owner[this.expando]&&owner[this.expando][jQuery.camelCase(key)]},access:function(owner,key,value){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
return void 0===key||key&&"string"==typeof key&&void 0===value?this.get(owner,key):(this.set(owner,key,value),void 0!==value?value:key)},remove:function(owner,key){var i,cache=owner[this.expando];if(void 0!==cache){if(void 0!==key){
// Support array or space separated string of keys
jQuery.isArray(key)?
// If key is an array of keys...
// We always set camelCase keys, so remove that.
key=key.map(jQuery.camelCase):(key=jQuery.camelCase(key),
// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
key=key in cache?[key]:key.match(rnotwhite)||[]),i=key.length;for(;i--;)delete cache[key[i]]}
// Remove the expando if there's no more data
(void 0===key||jQuery.isEmptyObject(cache))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
owner.nodeType?owner[this.expando]=void 0:delete owner[this.expando])}},hasData:function(owner){var cache=owner[this.expando];return void 0!==cache&&!jQuery.isEmptyObject(cache)}};var dataPriv=new Data,dataUser=new Data,rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;jQuery.extend({hasData:function(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem)},data:function(elem,name,data){return dataUser.access(elem,name,data)},removeData:function(elem,name){dataUser.remove(elem,name)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(elem,name,data){return dataPriv.access(elem,name,data)},_removeData:function(elem,name){dataPriv.remove(elem,name)}}),jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;
// Gets all values
if(void 0===key){if(this.length&&(data=dataUser.get(elem),1===elem.nodeType&&!dataPriv.get(elem,"hasDataAttrs"))){for(i=attrs.length;i--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
attrs[i]&&(name=attrs[i].name,0===name.indexOf("data-")&&(name=jQuery.camelCase(name.slice(5)),dataAttr(elem,name,data[name])));dataPriv.set(elem,"hasDataAttrs",!0)}return data}
// Sets multiple values
// Sets multiple values
return"object"==typeof key?this.each(function(){dataUser.set(this,key)}):access(this,function(value){var data;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(elem&&void 0===value){if(
// Attempt to get data from the cache
// The key will always be camelCased in Data
data=dataUser.get(elem,key),void 0!==data)return data;if(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
data=dataAttr(elem,key),void 0!==data)return data}else
// Set the data...
this.each(function(){
// We always store the camelCased key
dataUser.set(this,key,value)})},null,value,arguments.length>1,null,!0)},removeData:function(key){return this.each(function(){dataUser.remove(this,key)})}}),jQuery.extend({queue:function(elem,type,data){var queue;if(elem)
// Speed up dequeue by getting out quickly if this is just a lookup
return type=(type||"fx")+"queue",queue=dataPriv.get(elem,type),data&&(!queue||jQuery.isArray(data)?queue=dataPriv.access(elem,type,jQuery.makeArray(data)):queue.push(data)),queue||[]},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===fn&&(fn=queue.shift(),startLength--),fn&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===type&&queue.unshift("inprogress"),
// Clear up the last queue stop function
delete hooks.stop,fn.call(elem,next,hooks)),!startLength&&hooks&&hooks.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key])})})}}),jQuery.fn.extend({queue:function(type,data){var setter=2;return"string"!=typeof type&&(data=type,type="fx",setter--),arguments.length<setter?jQuery.queue(this[0],type):void 0===data?this:this.each(function(){var queue=jQuery.queue(this,type,data);
// Ensure a hooks for this queue
jQuery._queueHooks(this,type),"fx"===type&&"inprogress"!==queue[0]&&jQuery.dequeue(this,type)})},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type)})},clearQueue:function(type){return this.queue(type||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){--count||defer.resolveWith(elements,[elements])};for("string"!=typeof type&&(obj=type,type=void 0),type=type||"fx";i--;)tmp=dataPriv.get(elements[i],type+"queueHooks"),tmp&&tmp.empty&&(count++,tmp.empty.add(resolve));return resolve(),defer.promise(obj)}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i"),cssExpand=["Top","Right","Bottom","Left"],isHiddenWithinTree=function(elem,el){
// Inline style trumps all
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
return elem=el||elem,"none"===elem.style.display||""===elem.style.display&&jQuery.contains(elem.ownerDocument,elem)&&"none"===jQuery.css(elem,"display")},swap=function(elem,options,callback,args){var ret,name,old={};
// Remember the old values, and insert the new ones
for(name in options)old[name]=elem.style[name],elem.style[name]=options[name];ret=callback.apply(elem,args||[]);
// Revert the old values
for(name in options)elem.style[name]=old[name];return ret},defaultDisplayMap={};jQuery.fn.extend({show:function(){return showHide(this,!0)},hide:function(){return showHide(this)},toggle:function(state){return"boolean"==typeof state?state?this.show():this.hide():this.each(function(){isHiddenWithinTree(this)?jQuery(this).show():jQuery(this).hide()})}});var rcheckableType=/^(?:checkbox|radio)$/i,rtagName=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,rscriptType=/^$|\/(?:java|ecma)script/i,wrapMap={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE <=9 only
wrapMap.optgroup=wrapMap.option,wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead,wrapMap.th=wrapMap.td;var rhtml=/<|&#?\w+;/;!function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
input.setAttribute("type","radio"),input.setAttribute("checked","checked"),input.setAttribute("name","t"),div.appendChild(input),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
support.checkClone=div.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
div.innerHTML="<textarea>x</textarea>",support.noCloneChecked=!!div.cloneNode(!0).lastChild.defaultValue}();var documentElement=document.documentElement,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(elemData)for(
// Caller can pass in an object of custom data in lieu of the handler
handler.handler&&(handleObjIn=handler,handler=handleObjIn.handler,selector=handleObjIn.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
selector&&jQuery.find.matchesSelector(documentElement,selector),
// Make sure that the handler has a unique ID, used to find/remove it later
handler.guid||(handler.guid=jQuery.guid++),
// Init the element's event structure and main handler, if this is the first
(events=elemData.events)||(events=elemData.events={}),(eventHandle=elemData.handle)||(eventHandle=elemData.handle=function(e){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return"undefined"!=typeof jQuery&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):void 0}),
// Handle multiple events separated by a space
types=(types||"").match(rnotwhite)||[""],t=types.length;t--;)tmp=rtypenamespace.exec(types[t])||[],type=origType=tmp[1],namespaces=(tmp[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
type&&(
// If event changes its type, use the special event handlers for the changed type
special=jQuery.event.special[type]||{},
// If selector defined, determine special event api type, otherwise given type
type=(selector?special.delegateType:special.bindType)||type,
// Update special based on newly reset type
special=jQuery.event.special[type]||{},
// handleObj is passed to all event handlers
handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn),
// Init the event handler queue if we're the first
(handlers=events[type])||(handlers=events[type]=[],handlers.delegateCount=0,
// Only use addEventListener if the special events handler returns false
special.setup&&special.setup.call(elem,data,namespaces,eventHandle)!==!1||elem.addEventListener&&elem.addEventListener(type,eventHandle)),special.add&&(special.add.call(elem,handleObj),handleObj.handler.guid||(handleObj.handler.guid=handler.guid)),
// Add to the element's handler list, delegates in front
selector?handlers.splice(handlers.delegateCount++,0,handleObj):handlers.push(handleObj),
// Keep track of which events have ever been used, for event optimization
jQuery.event.global[type]=!0)},
// Detach an event or set of events from an element
remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(elemData&&(events=elemData.events)){for(
// Once for each type.namespace in types; type may be omitted
types=(types||"").match(rnotwhite)||[""],t=types.length;t--;)
// Unbind all events (on this namespace, if provided) for the element
if(tmp=rtypenamespace.exec(types[t])||[],type=origType=tmp[1],namespaces=(tmp[2]||"").split(".").sort(),type){for(special=jQuery.event.special[type]||{},type=(selector?special.delegateType:special.bindType)||type,handlers=events[type]||[],tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
origCount=j=handlers.length;j--;)handleObj=handlers[j],!mappedTypes&&origType!==handleObj.origType||handler&&handler.guid!==handleObj.guid||tmp&&!tmp.test(handleObj.namespace)||selector&&selector!==handleObj.selector&&("**"!==selector||!handleObj.selector)||(handlers.splice(j,1),handleObj.selector&&handlers.delegateCount--,special.remove&&special.remove.call(elem,handleObj));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
origCount&&!handlers.length&&(special.teardown&&special.teardown.call(elem,namespaces,elemData.handle)!==!1||jQuery.removeEvent(elem,type,elemData.handle),delete events[type])}else for(type in events)jQuery.event.remove(elem,type+types[t],handler,selector,!0);
// Remove data and the expando if it's no longer used
jQuery.isEmptyObject(events)&&dataPriv.remove(elem,"handle events")}},dispatch:function(nativeEvent){
// Make a writable jQuery.Event from the native event object
var i,j,ret,matched,handleObj,handlerQueue,event=jQuery.event.fix(nativeEvent),args=new Array(arguments.length),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};for(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
args[0]=event,i=1;i<arguments.length;i++)args[i]=arguments[i];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(event.delegateTarget=this,!special.preDispatch||special.preDispatch.call(this,event)!==!1){for(
// Determine handlers
handlerQueue=jQuery.event.handlers.call(this,event,handlers),
// Run delegates first; they may want to stop propagation beneath us
i=0;(matched=handlerQueue[i++])&&!event.isPropagationStopped();)for(event.currentTarget=matched.elem,j=0;(handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
event.rnamespace&&!event.rnamespace.test(handleObj.namespace)||(event.handleObj=handleObj,event.data=handleObj.data,ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args),void 0!==ret&&(event.result=ret)===!1&&(event.preventDefault(),event.stopPropagation()));
// Call the postDispatch hook for the mapped type
return special.postDispatch&&special.postDispatch.call(this,event),event.result}},handlers:function(event,handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;
// Support: IE <=9
// Find delegate handlers
// Black-hole SVG <use> instance trees (#13180)
//
// Support: Firefox <=42
// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
if(delegateCount&&cur.nodeType&&("click"!==event.type||isNaN(event.button)||event.button<1))for(;cur!==this;cur=cur.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===cur.nodeType&&(cur.disabled!==!0||"click"!==event.type)){for(matches=[],i=0;i<delegateCount;i++)handleObj=handlers[i],
// Don't conflict with Object.prototype properties (#13203)
sel=handleObj.selector+" ",void 0===matches[sel]&&(matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length),matches[sel]&&matches.push(handleObj);matches.length&&handlerQueue.push({elem:cur,handlers:matches})}
// Add the remaining (directly-bound) handlers
return delegateCount<handlers.length&&handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)}),handlerQueue},addProp:function(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:!0,configurable:!0,get:jQuery.isFunction(hook)?function(){if(this.originalEvent)return hook(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[name]},set:function(value){Object.defineProperty(this,name,{enumerable:!0,configurable:!0,writable:!0,value:value})}})},fix:function(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==safeActiveElement()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&jQuery.nodeName(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(event){return jQuery.nodeName(event.target,"a")}},beforeunload:{postDispatch:function(event){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==event.result&&event.originalEvent&&(event.originalEvent.returnValue=event.result)}}}},jQuery.removeEvent=function(elem,type,handle){
// This "if" is needed for plain objects
elem.removeEventListener&&elem.removeEventListener(type,handle)},jQuery.Event=function(src,props){
// Allow instantiation without the 'new' keyword
// Allow instantiation without the 'new' keyword
// Event object
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
// Support: Android <=2.3 only
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
// Put explicitly provided properties onto the event object
// Create a timestamp if incoming event doesn't have one
// Mark it as fixed
return this instanceof jQuery.Event?(src&&src.type?(this.originalEvent=src,this.type=src.type,this.isDefaultPrevented=src.defaultPrevented||void 0===src.defaultPrevented&&src.returnValue===!1?returnTrue:returnFalse,this.target=src.target&&3===src.target.nodeType?src.target.parentNode:src.target,this.currentTarget=src.currentTarget,this.relatedTarget=src.relatedTarget):this.type=src,props&&jQuery.extend(this,props),this.timeStamp=src&&src.timeStamp||jQuery.now(),void(this[jQuery.expando]=!0)):new jQuery.Event(src,props)},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},
// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(event){var button=event.button;
// Add which for key events
// Add which for key events
// Add which for click: 1 === left; 2 === middle; 3 === right
return null==event.which&&rkeyEvent.test(event.type)?null!=event.charCode?event.charCode:event.keyCode:!event.which&&void 0!==button&&rmouseEvent.test(event.type)?1&button?1:2&button?3:4&button?2:0:event.which}},jQuery.event.addProp),
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return related&&(related===target||jQuery.contains(target,related))||(event.type=handleObj.origType,ret=handleObj.handler.apply(this,arguments),event.type=fix),ret}}}),jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn)},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1)},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj)
// ( event )  dispatched jQuery.Event
return handleObj=types.handleObj,jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler),this;if("object"==typeof types){
// ( types-object [, selector] )
for(type in types)this.off(type,selector,types[type]);return this}
// ( types [, fn] )
return selector!==!1&&"function"!=typeof selector||(fn=selector,selector=void 0),fn===!1&&(fn=returnFalse),this.each(function(){jQuery.event.remove(this,types,fn,selector)})}});var/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
rnoInnerhtml=/<script|<style|<link/i,
// checked="checked" or checked
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;jQuery.extend({htmlPrefilter:function(html){return html.replace(rxhtmlTag,"<$1></$2>")},clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(!0),inPage=jQuery.contains(elem.ownerDocument,elem);
// Fix IE cloning issues
if(!(support.noCloneChecked||1!==elem.nodeType&&11!==elem.nodeType||jQuery.isXMLDoc(elem)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
destElements=getAll(clone),srcElements=getAll(elem),i=0,l=srcElements.length;i<l;i++)fixInput(srcElements[i],destElements[i]);
// Copy the events from the original to the clone
if(dataAndEvents)if(deepDataAndEvents)for(srcElements=srcElements||getAll(elem),destElements=destElements||getAll(clone),i=0,l=srcElements.length;i<l;i++)cloneCopyEvent(srcElements[i],destElements[i]);else cloneCopyEvent(elem,clone);
// Return the cloned set
// Preserve script evaluation history
return destElements=getAll(clone,"script"),destElements.length>0&&setGlobalEval(destElements,!inPage&&getAll(elem,"script")),clone},cleanData:function(elems){for(var data,elem,type,special=jQuery.event.special,i=0;void 0!==(elem=elems[i]);i++)if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events)for(type in data.events)special[type]?jQuery.event.remove(elem,type):jQuery.removeEvent(elem,type,data.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataPriv.expando]=void 0}elem[dataUser.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataUser.expando]=void 0)}}}),jQuery.fn.extend({detach:function(selector){return remove(this,selector,!0)},remove:function(selector){return remove(this,selector)},text:function(value){return access(this,function(value){return void 0===value?jQuery.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=value)})},null,value,arguments.length)},append:function(){return domManip(this,arguments,function(elem){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var target=manipulationTarget(this,elem);target.appendChild(elem)}})},prepend:function(){return domManip(this,arguments,function(elem){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild)}})},before:function(){return domManip(this,arguments,function(elem){this.parentNode&&this.parentNode.insertBefore(elem,this)})},after:function(){return domManip(this,arguments,function(elem){this.parentNode&&this.parentNode.insertBefore(elem,this.nextSibling)})},empty:function(){for(var elem,i=0;null!=(elem=this[i]);i++)1===elem.nodeType&&(
// Prevent memory leaks
jQuery.cleanData(getAll(elem,!1)),
// Remove any remaining nodes
elem.textContent="");return this},clone:function(dataAndEvents,deepDataAndEvents){return dataAndEvents=null!=dataAndEvents&&dataAndEvents,deepDataAndEvents=null==deepDataAndEvents?dataAndEvents:deepDataAndEvents,this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents)})},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(void 0===value&&1===elem.nodeType)return elem.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof value&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++)elem=this[i]||{},
// Remove element nodes and prevent memory leaks
1===elem.nodeType&&(jQuery.cleanData(getAll(elem,!1)),elem.innerHTML=value);elem=0}catch(e){}}elem&&this.empty().append(value)},null,value,arguments.length)},replaceWith:function(){var ignored=[];
// Make the changes, replacing each non-ignored context element with the new content
return domManip(this,arguments,function(elem){var parent=this.parentNode;jQuery.inArray(this,ignored)<0&&(jQuery.cleanData(getAll(this)),parent&&parent.replaceChild(elem,this))},ignored)}}),jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){for(var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;i<=last;i++)elems=i===last?this:this.clone(!0),jQuery(insert[i])[original](elems),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
push.apply(ret,elems.get());return this.pushStack(ret)}});var rmargin=/^margin/,rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i"),getStyles=function(elem){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var view=elem.ownerDocument.defaultView;return view&&view.opener||(view=window),view.getComputedStyle(elem)};!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function computeStyleTests(){
// This is a singleton, we need to execute it only once
if(div){div.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",div.innerHTML="",documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal="1%"!==divStyle.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
reliableMarginLeftVal="2px"===divStyle.marginLeft,boxSizingReliableVal="4px"===divStyle.width,
// Support: Android 4.0 - 4.3 only
// Some styles come back with percentage values, even though they shouldn't
div.style.marginRight="50%",pixelMarginRightVal="4px"===divStyle.marginRight,documentElement.removeChild(container),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
div=null}}var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");
// Finish early in limited (non-browser) environments
div.style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
div.style.backgroundClip="content-box",div.cloneNode(!0).style.backgroundClip="",support.clearCloneStyle="content-box"===div.style.backgroundClip,container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",container.appendChild(div),jQuery.extend(support,{pixelPosition:function(){return computeStyleTests(),pixelPositionVal},boxSizingReliable:function(){return computeStyleTests(),boxSizingReliableVal},pixelMarginRight:function(){return computeStyleTests(),pixelMarginRightVal},reliableMarginLeft:function(){return computeStyleTests(),reliableMarginLeftVal}}))}();var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style;jQuery.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(elem,computed){if(computed){
// We should always get a number back from opacity
var ret=curCSS(elem,"opacity");return""===ret?"1":ret}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{"float":"cssFloat"},
// Get and set the style property on a DOM Node
style:function(elem,name,value,extra){
// Don't set styles on text and comment nodes
if(elem&&3!==elem.nodeType&&8!==elem.nodeType&&elem.style){
// Make sure that we're working with the right name
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;
// Check if we're setting a value
// Gets hook for the prefixed version, then unprefixed version
// Check if we're setting a value
// If a hook was provided get the non-computed value from there
// Convert "+=" or "-=" to relative numbers (#7345)
// Fixes bug #9237
// Make sure that null and NaN values aren't set (#7116)
// If a number was passed in, add the unit (except for certain CSS properties)
// background-* props affect original clone's values
// If a hook was provided, use that value, otherwise just set the specified value
return name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName),hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName],void 0===value?hooks&&"get"in hooks&&void 0!==(ret=hooks.get(elem,!1,extra))?ret:style[name]:(type=typeof value,"string"===type&&(ret=rcssNum.exec(value))&&ret[1]&&(value=adjustCSS(elem,name,ret),type="number"),null!=value&&value===value&&("number"===type&&(value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px")),support.clearCloneStyle||""!==value||0!==name.indexOf("background")||(style[name]="inherit"),hooks&&"set"in hooks&&void 0===(value=hooks.set(elem,value,extra))||(style[name]=value)),void 0)}},css:function(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);
// Make numeric if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name
// Try prefixed name followed by the unprefixed name
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
// Convert "normal" to computed value
// Make numeric if forced or a qualifier was provided and val looks numeric
return name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName),hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName],hooks&&"get"in hooks&&(val=hooks.get(elem,!0,extra)),void 0===val&&(val=curCSS(elem,name,styles)),"normal"===val&&name in cssNormalTransform&&(val=cssNormalTransform[name]),""===extra||extra?(num=parseFloat(val),extra===!0||isFinite(num)?num||0:val):val}}),jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
return!rdisplayswap.test(jQuery.css(elem,"display"))||elem.getClientRects().length&&elem.getBoundingClientRect().width?getWidthOrHeight(elem,name,extra):swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra)})},set:function(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,"border-box"===jQuery.css(elem,"boxSizing",!1,styles),styles);
// Convert to pixels if value adjustment is needed
return subtract&&(matches=rcssNum.exec(value))&&"px"!==(matches[3]||"px")&&(elem.style[name]=value,value=jQuery.css(elem,name)),setPositiveNumber(elem,value,subtract)}}}),jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed)return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left}))+"px"}),
// These hooks are used by animate to expand properties
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){for(var i=0,expanded={},
// Assumes a single number if not a string
parts="string"==typeof value?value.split(" "):[value];i<4;i++)expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];return expanded}},rmargin.test(prefix)||(jQuery.cssHooks[prefix+suffix].set=setPositiveNumber)}),jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){for(styles=getStyles(elem),len=name.length;i<len;i++)map[name[i]]=jQuery.css(elem,name[i],!1,styles);return map}return void 0!==value?jQuery.style(elem,name,value):jQuery.css(elem,name)},name,value,arguments.length>1)}}),jQuery.Tween=Tween,Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem,this.prop=prop,this.easing=easing||jQuery.easing._default,this.options=options,this.start=this.now=this.cur(),this.end=end,this.unit=unit||(jQuery.cssNumber[prop]?"":"px")},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this)},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];return this.options.duration?this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration):this.pos=eased=percent,this.now=(this.end-this.start)*eased+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),hooks&&hooks.set?hooks.set(this):Tween.propHooks._default.set(this),this}},Tween.prototype.init.prototype=Tween.prototype,Tween.propHooks={_default:{get:function(tween){var result;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
return 1!==tween.elem.nodeType||null!=tween.elem[tween.prop]&&null==tween.elem.style[tween.prop]?tween.elem[tween.prop]:(result=jQuery.css(tween.elem,tween.prop,""),result&&"auto"!==result?result:0)},set:function(tween){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
jQuery.fx.step[tween.prop]?jQuery.fx.step[tween.prop](tween):1!==tween.elem.nodeType||null==tween.elem.style[jQuery.cssProps[tween.prop]]&&!jQuery.cssHooks[tween.prop]?tween.elem[tween.prop]=tween.now:jQuery.style(tween.elem,tween.prop,tween.now+tween.unit)}}},
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){tween.elem.nodeType&&tween.elem.parentNode&&(tween.elem[tween.prop]=tween.now)}},jQuery.easing={linear:function(p){return p},swing:function(p){return.5-Math.cos(p*Math.PI)/2},_default:"swing"},jQuery.fx=Tween.prototype.init,
// Back compat <1.8 extension point
jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);return adjustCSS(tween.elem,prop,rcssNum.exec(value),tween),tween}]},tweener:function(props,callback){jQuery.isFunction(props)?(callback=props,props=["*"]):props=props.match(rnotwhite);for(var prop,index=0,length=props.length;index<length;index++)prop=props[index],Animation.tweeners[prop]=Animation.tweeners[prop]||[],Animation.tweeners[prop].unshift(callback)},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){prepend?Animation.prefilters.unshift(callback):Animation.prefilters.push(callback)}}),jQuery.speed=function(speed,easing,fn){var opt=speed&&"object"==typeof speed?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};
// Go to the end state if fx are off or if document is hidden
// Normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return jQuery.fx.off||document.hidden?opt.duration=0:opt.duration="number"==typeof opt.duration?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default,null!=opt.queue&&opt.queue!==!0||(opt.queue="fx"),opt.old=opt.complete,opt.complete=function(){jQuery.isFunction(opt.old)&&opt.old.call(this),opt.queue&&jQuery.dequeue(this,opt.queue)},opt},jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){
// Show any hidden elements after setting opacity to 0
return this.filter(isHiddenWithinTree).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback)},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){
// Operate on a copy of prop so per-property easing won't be lost
var anim=Animation(this,jQuery.extend({},prop),optall);
// Empty animations, or finishing resolves immediately
(empty||dataPriv.get(this,"finish"))&&anim.stop(!0)};return doAnimation.finish=doAnimation,empty||optall.queue===!1?this.each(doAnimation):this.queue(optall.queue,doAnimation)},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop,stop(gotoEnd)};return"string"!=typeof type&&(gotoEnd=clearQueue,clearQueue=type,type=void 0),clearQueue&&type!==!1&&this.queue(type||"fx",[]),this.each(function(){var dequeue=!0,index=null!=type&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index)data[index]&&data[index].stop&&stopQueue(data[index]);else for(index in data)data[index]&&data[index].stop&&rrun.test(index)&&stopQueue(data[index]);for(index=timers.length;index--;)timers[index].elem!==this||null!=type&&timers[index].queue!==type||(timers[index].anim.stop(gotoEnd),dequeue=!1,timers.splice(index,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!dequeue&&gotoEnd||jQuery.dequeue(this,type)})},finish:function(type){return type!==!1&&(type=type||"fx"),this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;
// Look for any active animations, and finish them
for(
// Enable finishing flag on private data
data.finish=!0,
// Empty the queue first
jQuery.queue(this,type,[]),hooks&&hooks.stop&&hooks.stop.call(this,!0),index=timers.length;index--;)timers[index].elem===this&&timers[index].queue===type&&(timers[index].anim.stop(!0),timers.splice(index,1));
// Look for any animations in the old queue and finish them
for(index=0;index<length;index++)queue[index]&&queue[index].finish&&queue[index].finish.call(this);
// Turn off finishing flag
delete data.finish})}}),jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return null==speed||"boolean"==typeof speed?cssFn.apply(this,arguments):this.animate(genFx(name,!0),speed,easing,callback)}}),
// Generate shortcuts for custom animations
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback)}}),jQuery.timers=[],jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;for(fxNow=jQuery.now();i<timers.length;i++)timer=timers[i],
// Checks the timer has not already been removed
timer()||timers[i]!==timer||timers.splice(i--,1);timers.length||jQuery.fx.stop(),fxNow=void 0},jQuery.fx.timer=function(timer){jQuery.timers.push(timer),timer()?jQuery.fx.start():jQuery.timers.pop()},jQuery.fx.interval=13,jQuery.fx.start=function(){timerId||(timerId=window.requestAnimationFrame?window.requestAnimationFrame(raf):window.setInterval(jQuery.fx.tick,jQuery.fx.interval))},jQuery.fx.stop=function(){window.cancelAnimationFrame?window.cancelAnimationFrame(timerId):window.clearInterval(timerId),timerId=null},jQuery.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay=function(time,type){return time=jQuery.fx?jQuery.fx.speeds[time]||time:time,type=type||"fx",this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout)}})},function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
support.checkOn=""!==input.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
support.optSelected=opt.selected,
// Support: IE <=11 only
// An input loses its value after becoming a radio
input=document.createElement("input"),input.value="t",input.type="radio",support.radioValue="t"===input.value}();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1)},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name)})}}),jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==nType&&8!==nType&&2!==nType)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
return"undefined"==typeof elem.getAttribute?jQuery.prop(elem,name,value):(1===nType&&jQuery.isXMLDoc(elem)||(hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:void 0)),void 0!==value?null===value?void jQuery.removeAttr(elem,name):hooks&&"set"in hooks&&void 0!==(ret=hooks.set(elem,value,name))?ret:(elem.setAttribute(name,value+""),value):hooks&&"get"in hooks&&null!==(ret=hooks.get(elem,name))?ret:(ret=jQuery.find.attr(elem,name),null==ret?void 0:ret))},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&"radio"===value&&jQuery.nodeName(elem,"input")){var val=elem.value;return elem.setAttribute("type",value),val&&(elem.value=val),value}}}},removeAttr:function(elem,value){var name,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&1===elem.nodeType)for(;name=attrNames[i++];)elem.removeAttribute(name)}}),
// Hooks for boolean attributes
boolHook={set:function(elem,value,name){
// Remove boolean attributes when set to false
return value===!1?jQuery.removeAttr(elem,name):elem.setAttribute(name,name),name}},jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();
// Avoid an infinite loop by temporarily removing this function from the getter
return isXML||(handle=attrHandle[lowercaseName],attrHandle[lowercaseName]=ret,ret=null!=getter(elem,name,isXML)?lowercaseName:null,attrHandle[lowercaseName]=handle),ret}});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1)},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name]})}}),jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==nType&&8!==nType&&2!==nType)
// Fix name and attach hooks
return 1===nType&&jQuery.isXMLDoc(elem)||(name=jQuery.propFix[name]||name,hooks=jQuery.propHooks[name]),void 0!==value?hooks&&"set"in hooks&&void 0!==(ret=hooks.set(elem,value,name))?ret:elem[name]=value:hooks&&"get"in hooks&&null!==(ret=hooks.get(elem,name))?ret:elem[name]},propHooks:{tabIndex:{get:function(elem){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
support.optSelected||(jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;return parent&&parent.parentNode&&parent.parentNode.selectedIndex,null},set:function(elem){var parent=elem.parentNode;parent&&(parent.selectedIndex,parent.parentNode&&parent.parentNode.selectedIndex)}}),jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this});var rclass=/[\t\r\n\f]/g;jQuery.fn.extend({addClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value))return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)))});if("string"==typeof value&&value)for(classes=value.match(rnotwhite)||[];elem=this[i++];)if(curValue=getClass(elem),cur=1===elem.nodeType&&(" "+curValue+" ").replace(rclass," ")){for(j=0;clazz=classes[j++];)cur.indexOf(" "+clazz+" ")<0&&(cur+=clazz+" ");
// Only assign if different to avoid unneeded rendering.
finalValue=jQuery.trim(cur),curValue!==finalValue&&elem.setAttribute("class",finalValue)}return this},removeClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value))return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof value&&value)for(classes=value.match(rnotwhite)||[];elem=this[i++];)if(curValue=getClass(elem),
// This expression is here for better compressibility (see addClass)
cur=1===elem.nodeType&&(" "+curValue+" ").replace(rclass," ")){for(j=0;clazz=classes[j++];)
// Remove *all* instances
for(;cur.indexOf(" "+clazz+" ")>-1;)cur=cur.replace(" "+clazz+" "," ");
// Only assign if different to avoid unneeded rendering.
finalValue=jQuery.trim(cur),curValue!==finalValue&&elem.setAttribute("class",finalValue)}return this},toggleClass:function(value,stateVal){var type=typeof value;return"boolean"==typeof stateVal&&"string"===type?stateVal?this.addClass(value):this.removeClass(value):jQuery.isFunction(value)?this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal)}):this.each(function(){var className,i,self,classNames;if("string"===type)for(
// Toggle individual class names
i=0,self=jQuery(this),classNames=value.match(rnotwhite)||[];className=classNames[i++];)
// Check each className given, space separated list
self.hasClass(className)?self.removeClass(className):self.addClass(className);else void 0!==value&&"boolean"!==type||(className=getClass(this),className&&
// Store className if set
dataPriv.set(this,"__className__",className),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",className||value===!1?"":dataPriv.get(this,"__className__")||""))})},hasClass:function(selector){var className,elem,i=0;for(className=" "+selector+" ";elem=this[i++];)if(1===elem.nodeType&&(" "+getClass(elem)+" ").replace(rclass," ").indexOf(className)>-1)return!0;return!1}});var rreturn=/\r/g,rspaces=/[\x20\t\r\n\f]+/g;jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];{if(arguments.length)return isFunction=jQuery.isFunction(value),this.each(function(i){var val;1===this.nodeType&&(val=isFunction?value.call(this,i,jQuery(this).val()):value,
// Treat null/undefined as ""; convert numbers to string
null==val?val="":"number"==typeof val?val+="":jQuery.isArray(val)&&(val=jQuery.map(val,function(value){return null==value?"":value+""})),hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()],
// If set returns undefined, fall back to normal setting
hooks&&"set"in hooks&&void 0!==hooks.set(this,val,"value")||(this.value=val))});if(elem)
// Handle most common string cases
// Handle cases where value is null/undef or number
return hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()],hooks&&"get"in hooks&&void 0!==(ret=hooks.get(elem,"value"))?ret:(ret=elem.value,"string"==typeof ret?ret.replace(rreturn,""):null==ret?"":ret)}}}),jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
return null!=val?val:jQuery.trim(jQuery.text(elem)).replace(rspaces," ")}},select:{get:function(elem){
// Loop through all the selected options
for(var value,option,options=elem.options,index=elem.selectedIndex,one="select-one"===elem.type,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;i<max;i++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(option=options[i],(option.selected||i===index)&&
// Don't return options that are disabled or in a disabled optgroup
!option.disabled&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
value=jQuery(option).val(),one)return value;
// Multi-Selects return an array
values.push(value)}return values},set:function(elem,value){for(var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;i--;)option=options[i],/* eslint-disable no-cond-assign */
(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1)&&(optionSet=!0);
// Force browsers to behave consistently when non-matching value is set
return optionSet||(elem.selectedIndex=-1),values}}}}),
// Radios and checkboxes getter/setter
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value))return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1}},support.checkOn||(jQuery.valHooks[this].get=function(elem){return null===elem.getAttribute("value")?"on":elem.value})});
// Return jQuery for attributes-only inclusion
var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];
// Don't do events on text and comment nodes
if(cur=tmp=elem=elem||document,3!==elem.nodeType&&8!==elem.nodeType&&!rfocusMorph.test(type+jQuery.event.triggered)&&(type.indexOf(".")>-1&&(
// Namespaced trigger; create a regexp to match event type in handle()
namespaces=type.split("."),type=namespaces.shift(),namespaces.sort()),ontype=type.indexOf(":")<0&&"on"+type,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
event=event[jQuery.expando]?event:new jQuery.Event(type,"object"==typeof event&&event),
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
event.isTrigger=onlyHandlers?2:3,event.namespace=namespaces.join("."),event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
event.result=void 0,event.target||(event.target=elem),
// Clone any incoming data and prepend the event, creating the handler arg list
data=null==data?[event]:jQuery.makeArray(data,[event]),
// Allow special events to draw outside the lines
special=jQuery.event.special[type]||{},onlyHandlers||!special.trigger||special.trigger.apply(elem,data)!==!1)){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){for(bubbleType=special.delegateType||type,rfocusMorph.test(bubbleType+type)||(cur=cur.parentNode);cur;cur=cur.parentNode)eventPath.push(cur),tmp=cur;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
tmp===(elem.ownerDocument||document)&&eventPath.push(tmp.defaultView||tmp.parentWindow||window)}for(
// Fire handlers on the event path
i=0;(cur=eventPath[i++])&&!event.isPropagationStopped();)event.type=i>1?bubbleType:special.bindType||type,
// jQuery handler
handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle"),handle&&handle.apply(cur,data),
// Native handler
handle=ontype&&cur[ontype],handle&&handle.apply&&acceptData(cur)&&(event.result=handle.apply(cur,data),event.result===!1&&event.preventDefault());
// If nobody prevented the default action, do it now
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
// Don't re-trigger an onFOO event when we call its FOO() method
// Prevent re-triggering of the same event, since we already bubbled it above
return event.type=type,onlyHandlers||event.isDefaultPrevented()||special._default&&special._default.apply(eventPath.pop(),data)!==!1||!acceptData(elem)||ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)&&(tmp=elem[ontype],tmp&&(elem[ontype]=null),jQuery.event.triggered=type,elem[type](),jQuery.event.triggered=void 0,tmp&&(elem[ontype]=tmp)),event.result}},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event,event,{type:type,isSimulated:!0});jQuery.event.trigger(e,null,elem)}}),jQuery.fn.extend({trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this)})},triggerHandler:function(type,data){var elem=this[0];if(elem)return jQuery.event.trigger(type,data,elem,!0)}}),jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(i,name){
// Handle event binding
jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name)}}),jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver)}}),support.focusin="onfocusin"in window,
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
support.focusin||jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event))};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);attaches||doc.addEventListener(orig,handler,!0),dataPriv.access(doc,fix,(attaches||0)+1)},teardown:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;attaches?dataPriv.access(doc,fix,attaches):(doc.removeEventListener(orig,handler,!0),dataPriv.remove(doc,fix))}}});var location=window.location,nonce=jQuery.now(),rquery=/\?/;
// Cross-browser xml parsing
jQuery.parseXML=function(data){var xml;if(!data||"string"!=typeof data)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{xml=(new window.DOMParser).parseFromString(data,"text/xml")}catch(e){xml=void 0}return xml&&!xml.getElementsByTagName("parsererror").length||jQuery.error("Invalid XML: "+data),xml};var rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,valueOrFunction){
// If value is a function, invoke it and use its return value
var value=jQuery.isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(null==value?"":value)};
// If an array was passed in, assume that it is an array of form elements.
if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a))
// Serialize the form elements
jQuery.each(a,function(){add(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(prefix in a)buildParams(prefix,a[prefix],traditional,add);
// Return the resulting serialization
return s.join("&")},jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this}).filter(function(){var type=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type))}).map(function(i,elem){var val=jQuery(this).val();return null==val?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")}}):{name:elem.name,value:val.replace(rCRLF,"\r\n")}}).get()}});var r20=/%20/g,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
prefilters={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
transports={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
allTypes="*/".concat("*"),
// Anchor tag for parsing the document origin
originAnchor=document.createElement("a");originAnchor.href=location.href,jQuery.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":jQuery.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(target,settings){
// Building a settings object
// Extending ajaxSettings
return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target)},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),
// Main method
ajax:function(url,options){
// Callback for when everything is done
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;
// Ignore repeat invocations
completed||(completed=!0,
// Clear timeout if it exists
timeoutTimer&&window.clearTimeout(timeoutTimer),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
transport=void 0,
// Cache response headers
responseHeadersString=headers||"",
// Set readyState
jqXHR.readyState=status>0?4:0,
// Determine if successful
isSuccess=status>=200&&status<300||304===status,
// Get response data
responses&&(response=ajaxHandleResponses(s,jqXHR,responses)),
// Convert no matter what (that way responseXXX fields are always set)
response=ajaxConvert(s,response,jqXHR,isSuccess),
// If successful, handle type chaining
isSuccess?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
s.ifModified&&(modified=jqXHR.getResponseHeader("Last-Modified"),modified&&(jQuery.lastModified[cacheURL]=modified),modified=jqXHR.getResponseHeader("etag"),modified&&(jQuery.etag[cacheURL]=modified)),
// if no content
204===status||"HEAD"===s.type?statusText="nocontent":304===status?statusText="notmodified":(statusText=response.state,success=response.data,error=response.error,isSuccess=!error)):(
// Extract error from statusText and normalize for non-aborts
error=statusText,!status&&statusText||(statusText="error",status<0&&(status=0))),
// Set data for the fake xhr object
jqXHR.status=status,jqXHR.statusText=(nativeStatusText||statusText)+"",
// Success/Error
isSuccess?deferred.resolveWith(callbackContext,[success,statusText,jqXHR]):deferred.rejectWith(callbackContext,[jqXHR,statusText,error]),
// Status-dependent callbacks
jqXHR.statusCode(statusCode),statusCode=void 0,fireGlobals&&globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]),
// Complete
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]),fireGlobals&&(globalEventContext.trigger("ajaxComplete",[jqXHR,s]),
// Handle the global AJAX counter
--jQuery.active||jQuery.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof url&&(options=url,url=void 0),
// Force options to be an object
options=options||{};var transport,
// URL without anti-cache param
cacheURL,
// Response headers
responseHeadersString,responseHeaders,
// timeout handle
timeoutTimer,
// Url cleanup var
urlAnchor,
// Request state (becomes false upon send and true upon completion)
completed,
// To know if global events are to be dispatched
fireGlobals,
// Loop variable
i,
// uncached part of the url
uncached,
// Create the final options object
s=jQuery.ajaxSetup({},options),
// Callbacks context
callbackContext=s.context||s,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,
// Deferreds
deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),
// Status-dependent callbacks
statusCode=s.statusCode||{},
// Headers (they are sent all at once)
requestHeaders={},requestHeadersNames={},
// Default abort message
strAbort="canceled",
// Fake xhr
jqXHR={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(key){var match;if(completed){if(!responseHeaders)for(responseHeaders={};match=rheaders.exec(responseHeadersString);)responseHeaders[match[1].toLowerCase()]=match[2];match=responseHeaders[key.toLowerCase()]}return null==match?null:match},
// Raw string
getAllResponseHeaders:function(){return completed?responseHeadersString:null},
// Caches the header
setRequestHeader:function(name,value){return null==completed&&(name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name,requestHeaders[name]=value),this},
// Overrides response content-type header
overrideMimeType:function(type){return null==completed&&(s.mimeType=type),this},
// Status-dependent callbacks
statusCode:function(map){var code;if(map)if(completed)
// Execute the appropriate callbacks
jqXHR.always(map[jqXHR.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(code in map)statusCode[code]=[statusCode[code],map[code]];return this},
// Cancel the request
abort:function(statusText){var finalText=statusText||strAbort;return transport&&transport.abort(finalText),done(0,finalText),this}};
// A cross-domain request is in order when the origin doesn't match the current origin.
if(
// Attach deferreds
deferred.promise(jqXHR),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//"),
// Alias method option to type as per ticket #12004
s.type=options.method||options.type||s.method||s.type,
// Extract dataTypes list
s.dataTypes=(s.dataType||"*").toLowerCase().match(rnotwhite)||[""],null==s.crossDomain){urlAnchor=document.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 13
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{urlAnchor.href=s.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
urlAnchor.href=urlAnchor.href,s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!=urlAnchor.protocol+"//"+urlAnchor.host}catch(e){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
s.crossDomain=!0}}
// If request was aborted inside a prefilter, stop there
if(
// Convert data if not already a string
s.data&&s.processData&&"string"!=typeof s.data&&(s.data=jQuery.param(s.data,s.traditional)),
// Apply prefilters
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR),completed)return jqXHR;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
fireGlobals=jQuery.event&&s.global,
// Watch for a new set of requests
fireGlobals&&0===jQuery.active++&&jQuery.event.trigger("ajaxStart"),
// Uppercase the type
s.type=s.type.toUpperCase(),
// Determine if request has content
s.hasContent=!rnoContent.test(s.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
cacheURL=s.url.replace(rhash,""),
// More options handling for requests with no content
s.hasContent?s.data&&s.processData&&0===(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&(s.data=s.data.replace(r20,"+")):(
// Remember the hash so we can put it back
uncached=s.url.slice(cacheURL.length),
// If data is available, append data to url
s.data&&(cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data,
// #9682: remove data so that it's not used in an eventual retry
delete s.data),
// Add anti-cache in uncached url if needed
s.cache===!1&&(cacheURL=cacheURL.replace(rts,""),uncached=(rquery.test(cacheURL)?"&":"?")+"_="+nonce++ +uncached),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
s.url=cacheURL+uncached),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
s.ifModified&&(jQuery.lastModified[cacheURL]&&jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]),jQuery.etag[cacheURL]&&jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL])),
// Set the correct header, if data is being sent
(s.data&&s.hasContent&&s.contentType!==!1||options.contentType)&&jqXHR.setRequestHeader("Content-Type",s.contentType),
// Set the Accepts header for the server, depending on the dataType
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+("*"!==s.dataTypes[0]?", "+allTypes+"; q=0.01":""):s.accepts["*"]);
// Check for headers option
for(i in s.headers)jqXHR.setRequestHeader(i,s.headers[i]);
// Allow custom headers/mimetypes and early abort
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===!1||completed))
// Abort if not done already and return
return jqXHR.abort();
// If no transport, we auto-abort
if(
// Aborting is no longer a cancellation
strAbort="abort",
// Install callbacks on deferreds
completeDeferred.add(s.complete),jqXHR.done(s.success),jqXHR.fail(s.error),
// Get transport
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR)){
// If request was aborted inside ajaxSend, stop there
if(jqXHR.readyState=1,
// Send global event
fireGlobals&&globalEventContext.trigger("ajaxSend",[jqXHR,s]),completed)return jqXHR;
// Timeout
s.async&&s.timeout>0&&(timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout")},s.timeout));try{completed=!1,transport.send(requestHeaders,done)}catch(e){
// Rethrow post-completion exceptions
if(completed)throw e;
// Propagate others as results
done(-1,e)}}else done(-1,"No Transport");return jqXHR},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json")},getScript:function(url,callback){return jQuery.get(url,void 0,callback,"script")}}),jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return jQuery.isFunction(data)&&(type=type||callback,callback=data,data=void 0),jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url))}}),jQuery._evalUrl=function(url){return jQuery.ajax({url:url,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},jQuery.fn.extend({wrapAll:function(html){var wrap;
// The elements to wrap the target around
return this[0]&&(jQuery.isFunction(html)&&(html=html.call(this[0])),wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&wrap.insertBefore(this[0]),wrap.map(function(){for(var elem=this;elem.firstElementChild;)elem=elem.firstElementChild;return elem}).append(this)),this},wrapInner:function(html){return jQuery.isFunction(html)?this.each(function(i){jQuery(this).wrapInner(html.call(this,i))}):this.each(function(){var self=jQuery(this),contents=self.contents();contents.length?contents.wrapAll(html):self.append(html)})},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html)})},unwrap:function(selector){return this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes)}),this}}),jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem)},jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length)},jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(e){}};var xhrSuccessStatus={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported,support.ajax=xhrSupported=!!xhrSupported,jQuery.ajaxTransport(function(options){var callback,errorCallback;
// Cross domain only allowed if supported through XMLHttpRequest
if(support.cors||xhrSupported&&!options.crossDomain)return{send:function(headers,complete){var i,xhr=options.xhr();
// Apply custom fields if provided
if(xhr.open(options.type,options.url,options.async,options.username,options.password),options.xhrFields)for(i in options.xhrFields)xhr[i]=options.xhrFields[i];
// Override mime type if needed
options.mimeType&&xhr.overrideMimeType&&xhr.overrideMimeType(options.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
options.crossDomain||headers["X-Requested-With"]||(headers["X-Requested-With"]="XMLHttpRequest");
// Set headers
for(i in headers)xhr.setRequestHeader(i,headers[i]);
// Callback
callback=function(type){return function(){callback&&(callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null,"abort"===type?xhr.abort():"error"===type?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof xhr.status?complete(0,"error"):complete(
// File: protocol always yields status 0; see #8605, #14207
xhr.status,xhr.statusText):complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(xhr.responseType||"text")||"string"!=typeof xhr.responseText?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders()))}},
// Listen to events
xhr.onload=callback(),errorCallback=xhr.onerror=callback("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==xhr.onabort?xhr.onabort=errorCallback:xhr.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===xhr.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
window.setTimeout(function(){callback&&errorCallback()})},
// Create the abort callback
callback=callback("abort");try{
// Do send the request (this may raise an exception)
xhr.send(options.hasContent&&options.data||null)}catch(e){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(callback)throw e}},abort:function(){callback&&callback()}}}),
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),
// Install script dataType
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){return jQuery.globalEval(text),text}}}),
// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter("script",function(s){void 0===s.cache&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),
// Bind script tag hack transport
jQuery.ajaxTransport("script",function(s){
// This transport only deals with cross domain requests
if(s.crossDomain){var script,callback;return{send:function(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove(),callback=null,evt&&complete("error"===evt.type?404:200,evt.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
document.head.appendChild(script[0])},abort:function(){callback&&callback()}}}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;return this[callback]=!0,callback}}),
// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==!1&&(rjsonp.test(s.url)?"url":"string"==typeof s.data&&0===(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(jsonProp||"jsonp"===s.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// Force json dataType
// Install callback
// Clean-up function (fires after converters)
return callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,jsonProp?s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName):s.jsonp!==!1&&(s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName),s.converters["script json"]=function(){return responseContainer||jQuery.error(callbackName+" was not called"),responseContainer[0]},s.dataTypes[0]="json",overwritten=window[callbackName],window[callbackName]=function(){responseContainer=arguments},jqXHR.always(function(){
// If previous value didn't exist - remove it
void 0===overwritten?jQuery(window).removeProp(callbackName):window[callbackName]=overwritten,
// Save back as free
s[callbackName]&&(
// Make sure that re-using the options doesn't screw things around
s.jsonpCallback=originalSettings.jsonpCallback,
// Save the callback name for future use
oldCallbacks.push(callbackName)),
// Call if it was a function and we have a response
responseContainer&&jQuery.isFunction(overwritten)&&overwritten(responseContainer[0]),responseContainer=overwritten=void 0}),"script"}),
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument=function(){var body=document.implementation.createHTMLDocument("").body;return body.innerHTML="<form></form><form></form>",2===body.childNodes.length}(),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML=function(data,context,keepScripts){if("string"!=typeof data)return[];"boolean"==typeof context&&(keepScripts=context,context=!1);var base,parsed,scripts;
// Single tag
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
// Single tag
return context||(support.createHTMLDocument?(context=document.implementation.createHTMLDocument(""),base=context.createElement("base"),base.href=document.location.href,context.head.appendChild(base)):context=document),parsed=rsingleTag.exec(data),scripts=!keepScripts&&[],parsed?[context.createElement(parsed[1])]:(parsed=buildFragment([data],context,scripts),scripts&&scripts.length&&jQuery(scripts).remove(),jQuery.merge([],parsed.childNodes))},/**
 * Load a url into a page
 */
jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return off>-1&&(selector=jQuery.trim(url.slice(off)),url=url.slice(0,off)),jQuery.isFunction(params)?(callback=params,params=void 0):params&&"object"==typeof params&&(type="POST"),self.length>0&&jQuery.ajax({url:url,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:type||"GET",dataType:"html",data:params}).done(function(responseText){
// Save response for use in complete callback
response=arguments,self.html(selector?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):
// Otherwise use the full result
responseText)}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR])})}),this},
// Attach a bunch of functions for handling common AJAX events
jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn)}}),jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem}).length},jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};
// Set position first, in-case top/left are set even on static elem
"static"===position&&(elem.style.position="relative"),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=("absolute"===position||"fixed"===position)&&(curCSSTop+curCSSLeft).indexOf("auto")>-1,
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
calculatePosition?(curPosition=curElem.position(),curTop=curPosition.top,curLeft=curPosition.left):(curTop=parseFloat(curCSSTop)||0,curLeft=parseFloat(curCSSLeft)||0),jQuery.isFunction(options)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
options=options.call(elem,i,jQuery.extend({},curOffset))),null!=options.top&&(props.top=options.top-curOffset.top+curTop),null!=options.left&&(props.left=options.left-curOffset.left+curLeft),"using"in options?options.using.call(elem,props):curElem.css(props)}},jQuery.fn.extend({offset:function(options){
// Preserve chaining for setter
if(arguments.length)return void 0===options?this:this.each(function(i){jQuery.offset.setOffset(this,options,i)});var docElem,win,rect,doc,elem=this[0];if(elem)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
// Make sure element is not hidden (display: none)
return elem.getClientRects().length?(rect=elem.getBoundingClientRect(),rect.width||rect.height?(doc=elem.ownerDocument,win=getWindow(doc),docElem=doc.documentElement,{top:rect.top+win.pageYOffset-docElem.clientTop,left:rect.left+win.pageXOffset-docElem.clientLeft}):rect):{top:0,left:0}},position:function(){if(this[0]){var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};
// Subtract parent offsets and element margins
// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
// because it is its only offset parent
// Assume getBoundingClientRect is there when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===jQuery.css(elem,"position")?offset=elem.getBoundingClientRect():(offsetParent=this.offsetParent(),offset=this.offset(),jQuery.nodeName(offsetParent[0],"html")||(parentOffset=offsetParent.offset()),parentOffset={top:parentOffset.top+jQuery.css(offsetParent[0],"borderTopWidth",!0),left:parentOffset.left+jQuery.css(offsetParent[0],"borderLeftWidth",!0)}),{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",!0),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var offsetParent=this.offsetParent;offsetParent&&"static"===jQuery.css(offsetParent,"position");)offsetParent=offsetParent.offsetParent;return offsetParent||documentElement})}}),
// Create scrollLeft and scrollTop methods
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);return void 0===val?win?win[prop]:elem[method]:void(win?win.scrollTo(top?win.pageXOffset:val,top?val:win.pageYOffset):elem[method]=val)},method,val,arguments.length)}}),
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed)
// If curCSS returns percentage, fallback to offset
return computed=curCSS(elem,prop),rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){
// Margin is only for outerHeight, outerWidth
jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||"boolean"!=typeof margin),extra=defaultExtra||(margin===!0||value===!0?"margin":"border");return access(this,function(elem,type,value){var doc;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return jQuery.isWindow(elem)?0===funcName.indexOf("outer")?elem["inner"+name]:elem.document.documentElement["client"+name]:9===elem.nodeType?(doc=elem.documentElement,Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name])):void 0===value?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra)},type,chainable?margin:void 0,chainable)}})}),jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn)},unbind:function(types,fn){return this.off(types,null,fn)},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn)},undelegate:function(selector,types,fn){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(selector,"**"):this.off(types,selector||"**",fn)}}),jQuery.parseJSON=JSON.parse,
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
"function"==typeof define&&define.amd&&define("jquery",[],function(){return jQuery});var
// Map over jQuery in case of overwrite
_jQuery=window.jQuery,
// Map over the $ in case of overwrite
_$=window.$;
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return jQuery.noConflict=function(deep){return window.$===jQuery&&(window.$=_$),deep&&window.jQuery===jQuery&&(window.jQuery=_jQuery),jQuery},noGlobal||(window.jQuery=window.$=jQuery),jQuery});