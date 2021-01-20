import{h as t,r as e,c as i,H as a,g as o}from"./index-8e4abb3f.js";const d=/^(\d{4})-(\d{2})-(\d{2})$/;var s;function r(t,e,i){var a=parseInt(i,10),o=parseInt(e,10),d=parseInt(t,10);if(Number.isInteger(d)&&Number.isInteger(o)&&Number.isInteger(a)&&o>0&&o<=12&&a>0&&a<=31&&d>0)return new Date(d,o-1,a)}function n(t){if(!t)return;const e=t.match(d);return e?r(e[1],e[2],e[3]):void 0}function l(t){if(!t)return"";var e=t.getDate().toString(10),i=(t.getMonth()+1).toString(10),a=t.getFullYear().toString(10);return t.getDate()<10&&(e="0"+e),t.getMonth()<9&&(i="0"+i),`${a}-${i}-${e}`}function u(t,e){return null!=t&&null!=e&&t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}function c(t,e){var i=new Date(t);return i.setDate(i.getDate()+e),i}function h(t,e=s.Monday){var i=new Date(t),a=i.getDay(),o=(a<e?7:0)+a-e;return i.setDate(i.getDate()-o),i}function p(t,e=s.Monday){var i=new Date(t),a=i.getDay(),o=6+(a<e?-7:0)-(a-e);return i.setDate(i.getDate()+o),i}function b(t){return new Date(t.getFullYear(),t.getMonth(),1)}function _(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function v(t,e){const i=new Date(t);return i.setMonth(e),i}function g(t,e){const i=new Date(t);return i.setFullYear(e),i}function f(t,e,i){return m(t,e,i)===t}function m(t,e,i){const a=t.getTime();return e&&e instanceof Date&&a<e.getTime()?e:i&&i instanceof Date&&a>i.getTime()?i:t}function x(){return Math.random().toString(16).slice(-4)}function y(t){return`${t}-${x()}${x()}-${x()}-${x()}-${x()}-${x()}${x()}${x()}`}!function(t){t[t.Sunday=0]="Sunday",t[t.Monday=1]="Monday",t[t.Tuesday=2]="Tuesday",t[t.Wednesday=3]="Wednesday",t[t.Thursday=4]="Thursday",t[t.Friday=5]="Friday",t[t.Saturday=6]="Saturday"}(s||(s={}));const w=({onClick:e,localization:i,name:a,formattedValue:o,value:d,identifier:s,disabled:r,required:n,role:l,buttonRef:u,inputRef:c,onInput:h,onBlur:p,onFocus:b})=>t("div",{class:"duet-date__input-wrapper"},t("input",{class:"duet-date__input",value:o,placeholder:i.placeholder,id:s,disabled:r,role:l,required:!!n||void 0,"aria-autocomplete":"none",onInput:h,onFocus:b,onBlur:p,autoComplete:"off",ref:c}),t("input",{type:"hidden",name:a,value:d}),t("button",{class:"duet-date__toggle",onClick:e,disabled:r,ref:u,type:"button"},t("span",{class:"duet-date__toggle-icon"},t("svg",{"aria-hidden":"true",height:"24",viewBox:"0 0 21 21",width:"24",xmlns:"http://www.w3.org/2000/svg"},t("g",{fill:"none","fill-rule":"evenodd",transform:"translate(2 2)"},t("path",{d:"m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"m.5 4.5h16",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),t("g",{fill:"currentColor"},t("circle",{cx:"8.5",cy:"8.5",r:"1"}),t("circle",{cx:"4.5",cy:"8.5",r:"1"}),t("circle",{cx:"12.5",cy:"8.5",r:"1"}),t("circle",{cx:"8.5",cy:"12.5",r:"1"}),t("circle",{cx:"4.5",cy:"12.5",r:"1"}),t("circle",{cx:"12.5",cy:"12.5",r:"1"}))))),t("span",{class:"duet-date__vhidden"},i.buttonLabel,o&&t("span",null,", ",i.selectedDateMessage," ",o)))),k=({focusedDay:e,today:i,day:a,isHighlighted:o,onDaySelect:d,onKeyboardNavigation:s,focusedDayRef:r,inRange:n,dateFormatter:l})=>{const c=u(a,i),h=u(a,e),p=a.getMonth()!==e.getMonth(),b=!n;return t("button",{class:{"duet-date__day":!0,"is-outside":b,"is-disabled":p,"is-today":c,"is-highlighted":o},tabIndex:h?0:-1,onClick:function(t){d(t,a)},onKeyDown:s,disabled:b||p,type:"button",ref:t=>{h&&t&&r&&r(t)}},t("span",{"aria-hidden":"true"},a.getDate()),t("span",{class:"duet-date__vhidden"},l(a)))},D=({selectedDate:e,focusedDate:i,labelledById:a,localization:o,firstDayOfWeek:d,min:r,max:n,highlightedDays:l,dateFormatter:v,onDateSelect:g,onKeyboardNavigation:m,focusedDayRef:x,onMouseDown:y,onFocusIn:w})=>{const D=new Date,z=function(t,e=s.Monday){return function(t,e){const i=[];let a=t;for(;!u(a,e);)i.push(a),a=c(a,1);return i.push(a),i}(h(b(t),e),p(_(t),e))}(i,d);return t("table",{class:"duet-date__table",role:"grid","aria-labelledby":a,onFocusin:w,onMouseDown:y},t("thead",null,t("tr",null,(C=d,F=e=>t("th",{class:"duet-date__table-header",scope:"col"},t("span",{"aria-hidden":"true"},e.substr(0,2)),t("span",{class:"duet-date__vhidden"},e)),(M=o.dayNames).map(((t,e)=>F(M[(e+C)%M.length])))))),t("tbody",null,function(t){const e=[];for(let i=0;i<t.length;i+=7)e.push(t.slice(i,i+7));return e}(z).map((a=>t("tr",{class:"duet-date__row"},a.map((a=>t("td",{class:"duet-date__cell",role:"gridcell","aria-selected":u(a,e)?"true":void 0},t(k,{day:a,today:D,isHighlighted:null==l?void 0:l.some((t=>u(new Date(t),a))),focusedDay:i,inRange:f(a,r,n),onDaySelect:g,dateFormatter:v,onKeyboardNavigation:m,focusedDayRef:x})))))))));var M,C,F},z={buttonLabel:"Choose date",placeholder:"YYYY-MM-DD",selectedDateMessage:"Selected date is",prevMonthLabel:"Previous month",nextMonthLabel:"Next month",monthSelectLabel:"Month",yearSelectLabel:"Year",closeLabel:"Close window",keyboardInstruction:"You can use arrow keys to navigate dates",calendarHeading:"Choose a date",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},M={parse:n,format:l},C=/[^0-9\.\/\-]+/g,F=class{constructor(t){e(this,t),this.duetChange=i(this,"duetChange",7),this.duetBlur=i(this,"duetBlur",7),this.duetFocus=i(this,"duetFocus",7),this.monthSelectId=y("DuetDateMonth"),this.yearSelectId=y("DuetDateYear"),this.dialogLabelId=y("DuetDateLabel"),this.initialTouchX=null,this.initialTouchY=null,this.activeFocus=!1,this.focusedDay=new Date,this.open=!1,this.name="date",this.identifier="",this.disabled=!1,this.direction="right",this.required=!1,this.value="",this.min="",this.max="",this.highlightedDays="",this.firstDayOfWeek=s.Monday,this.localization=z,this.dateAdapter=M,this.enableActiveFocus=()=>{this.activeFocus=!0},this.disableActiveFocus=()=>{this.activeFocus=!1},this.toggleOpen=t=>{t.preventDefault(),this.open?this.hide(!1):this.show()},this.handleEscKey=t=>{27===t.keyCode&&this.hide()},this.handleBlur=t=>{t.stopPropagation(),this.duetBlur.emit({component:"duet-date-picker"})},this.handleFocus=t=>{t.stopPropagation(),this.duetFocus.emit({component:"duet-date-picker"})},this.handleTouchStart=t=>{const e=t.changedTouches[0];this.initialTouchX=e.pageX,this.initialTouchY=e.pageY},this.handleTouchMove=t=>{t.preventDefault()},this.handleTouchEnd=t=>{const e=t.changedTouches[0],i=e.pageX-this.initialTouchX,a=e.pageY-this.initialTouchY,o=Math.abs(i)>=70&&Math.abs(a)<=70,d=Math.abs(a)>=70&&Math.abs(i)<=70&&a>0;o?this.addMonths(i<0?1:-1):d&&(this.hide(!1),t.preventDefault()),this.initialTouchY=null,this.initialTouchX=null},this.handleNextMonthClick=t=>{t.preventDefault(),this.addMonths(1)},this.handlePreviousMonthClick=t=>{t.preventDefault(),this.addMonths(-1)},this.handleFirstFocusableKeydown=t=>{9===t.keyCode&&t.shiftKey&&(this.focusedDayNode.focus(),t.preventDefault())},this.handleKeyboardNavigation=t=>{if(9===t.keyCode&&!t.shiftKey)return t.preventDefault(),void this.firstFocusableElement.focus();var e=!0;switch(t.keyCode){case 39:this.addDays(1);break;case 37:this.addDays(-1);break;case 40:this.addDays(7);break;case 38:this.addDays(-7);break;case 33:t.shiftKey?this.addYears(-1):this.addMonths(-1);break;case 34:t.shiftKey?this.addYears(1):this.addMonths(1);break;case 36:this.startOfWeek();break;case 35:this.endOfWeek();break;default:e=!1}e&&(t.preventDefault(),this.enableActiveFocus())},this.handleDaySelect=(t,e)=>{f(e,n(this.min),n(this.max))&&(e.getMonth()===this.focusedDay.getMonth()?(this.setValue(e),this.hide()):this.setFocusedDay(e))},this.handleMonthSelect=t=>{this.setMonth(parseInt(t.target.value,10))},this.handleYearSelect=t=>{this.setYear(parseInt(t.target.value,10))},this.handleInputChange=t=>{const e=t.target;e.value=e.value.replace(C,"");const i=this.dateAdapter.parse(e.value,r);(i||""===e.value)&&this.setValue(i)},this.processFocusedDayNode=t=>{this.focusedDayNode=t,this.activeFocus&&this.open&&setTimeout((()=>t.focus()),0)}}handleDocumentClick(t){if(!this.open)return;const e=t.target;this.dialogWrapperNode.contains(e)||this.datePickerButton.contains(e)||this.hide(!1)}parseHighlightedDays(t){t&&(this.highlighted=JSON.parse(t).map((({date:t})=>n(t))))}componentWillLoad(){this.parseHighlightedDays(this.highlightedDays)}async setFocus(){return this.datePickerInput.focus()}async show(){this.open=!0,this.setFocusedDay(n(this.value)||new Date),clearTimeout(this.focusTimeoutId),this.focusTimeoutId=setTimeout((()=>this.monthSelectNode.focus()),300)}async hide(t=!0){this.open=!1,clearTimeout(this.focusTimeoutId),t&&setTimeout((()=>this.datePickerButton.focus()),500)}addDays(t){this.setFocusedDay(c(this.focusedDay,t))}addMonths(t){this.setMonth(this.focusedDay.getMonth()+t)}addYears(t){this.setYear(this.focusedDay.getFullYear()+t)}startOfWeek(){this.setFocusedDay(h(this.focusedDay,this.firstDayOfWeek))}endOfWeek(){this.setFocusedDay(p(this.focusedDay,this.firstDayOfWeek))}setMonth(t){const e=v(b(this.focusedDay),t),i=_(e),a=v(this.focusedDay,t);this.setFocusedDay(m(a,e,i))}setYear(t){const e=g(b(this.focusedDay),t),i=_(e),a=g(this.focusedDay,t);this.setFocusedDay(m(a,e,i))}setFocusedDay(t){this.focusedDay=m(t,n(this.min),n(this.max))}setValue(t){this.value=l(t),this.duetChange.emit({component:"duet-date-picker",value:this.value,valueAsDate:t})}render(){const e=n(this.value),i=e&&this.dateAdapter.format(e),o=(e||this.focusedDay).getFullYear(),d=this.focusedDay.getMonth(),s=this.focusedDay.getFullYear(),r=n(this.min),l=n(this.max),u=null!=r&&r.getMonth()===d&&r.getFullYear()===s,c=null!=l&&l.getMonth()===d&&l.getFullYear()===s;let h=o-10,p=o+10;return r&&(h=Math.max(h,r.getFullYear())),l&&(p=Math.min(p,l.getFullYear())),t(a,null,t("div",{class:"duet-date"},t(w,{value:this.value,formattedValue:i,onInput:this.handleInputChange,onBlur:this.handleBlur,onFocus:this.handleFocus,onClick:this.toggleOpen,name:this.name,disabled:this.disabled,role:this.role,required:this.required,identifier:this.identifier,localization:this.localization,buttonRef:t=>this.datePickerButton=t,inputRef:t=>this.datePickerInput=t}),t("div",{class:{"duet-date__dialog":!0,"is-left":"left"===this.direction,"is-active":this.open},role:"dialog","aria-modal":"true","aria-hidden":this.open?"false":"true","aria-labelledby":this.dialogLabelId,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},t("div",{class:"duet-date__dialog-content",onKeyDown:this.handleEscKey,ref:t=>this.dialogWrapperNode=t},t("div",{class:"duet-date__vhidden duet-date__instructions","aria-live":"polite"},this.localization.keyboardInstruction),t("div",{class:"duet-date__mobile",onFocusin:this.disableActiveFocus},t("label",{class:"duet-date__mobile-heading"},this.localization.calendarHeading),t("button",{class:"duet-date__close",ref:t=>this.firstFocusableElement=t,onKeyDown:this.handleFirstFocusableKeydown,onClick:()=>this.hide(),type:"button"},t("svg",{"aria-hidden":"true",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})),t("span",{class:"duet-date__vhidden"},this.localization.closeLabel))),t("div",{class:"duet-date__header",onFocusin:this.disableActiveFocus},t("div",null,t("h2",{id:this.dialogLabelId,class:"duet-date__vhidden","aria-live":"polite"},this.localization.monthNames[d]," ",this.focusedDay.getFullYear()),t("label",{htmlFor:this.monthSelectId,class:"duet-date__vhidden"},this.localization.monthSelectLabel),t("div",{class:"duet-date__select"},t("select",{id:this.monthSelectId,class:"duet-date__select--month",ref:t=>this.monthSelectNode=t,onChange:this.handleMonthSelect},this.localization.monthNames.map(((e,i)=>t("option",{key:e,value:i,selected:i===d},e)))),t("div",{class:"duet-date__select-label","aria-hidden":"true"},t("span",null,this.localization.monthNamesShort[d]),t("svg",{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},t("path",{d:"M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"})))),t("label",{htmlFor:this.yearSelectId,class:"duet-date__vhidden"},this.localization.yearSelectLabel),t("div",{class:"duet-date__select"},t("select",{id:this.yearSelectId,class:"duet-date__select--year",onChange:this.handleYearSelect},function(t,e){for(var i=[],a=t;a<=e;a++)i.push(a);return i}(h,p).map((e=>t("option",{key:e,selected:e===s},e)))),t("div",{class:"duet-date__select-label","aria-hidden":"true"},t("span",null,this.focusedDay.getFullYear()),t("svg",{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},t("path",{d:"M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"}))))),t("div",{class:"duet-date__nav"},t("button",{class:"duet-date__prev",onClick:this.handlePreviousMonthClick,disabled:u,type:"button"},t("svg",{"aria-hidden":"true",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 24 24"},t("path",{d:"M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"})),t("span",{class:"duet-date__vhidden"},this.localization.prevMonthLabel)),t("button",{class:"duet-date__next",onClick:this.handleNextMonthClick,disabled:c,type:"button"},t("svg",{"aria-hidden":"true",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 24 24"},t("path",{d:"M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"})),t("span",{class:"duet-date__vhidden"},this.localization.nextMonthLabel)))),t(D,{selectedDate:e,focusedDate:this.focusedDay,highlightedDays:this.highlighted,onDateSelect:this.handleDaySelect,onKeyboardNavigation:this.handleKeyboardNavigation,labelledById:this.dialogLabelId,localization:this.localization,firstDayOfWeek:this.firstDayOfWeek,focusedDayRef:this.processFocusedDayNode,min:r,max:l,dateFormatter:this.dateAdapter.format})))))}get element(){return o(this)}static get watchers(){return{highlightedDays:["parseHighlightedDays"]}}};F.style='.duet-date *,.duet-date *::before,.duet-date *::after{box-sizing:border-box;margin:0;width:auto}.duet-date{box-sizing:border-box;color:var(--duet-color-text);display:block;font-family:var(--duet-font);margin:0;position:relative;text-align:left;width:100%}.duet-date__input{-webkit-appearance:none;appearance:none;background:var(--duet-color-surface);border:1px solid var(--duet-color-text);border-radius:var(--duet-radius);color:var(--duet-color-text);float:none;font-family:var(--duet-font);font-size:100%;line-height:normal;padding:14px 60px 14px 14px;width:100%}.duet-date__input:focus{border-color:var(--duet-color-primary);box-shadow:0 0 0 1px var(--duet-color-primary);outline:0}.duet-date__input::-webkit-input-placeholder{color:var(--duet-color-placeholder);opacity:1}.duet-date__input:-moz-placeholder{color:var(--duet-color-placeholder);opacity:1}.duet-date__input:-ms-input-placeholder{color:var(--duet-color-placeholder)}.duet-date__input-wrapper{position:relative;width:100%}.duet-date__toggle{-moz-appearance:none;-webkit-appearance:none;-webkit-user-select:none;align-items:center;appearance:none;background:var(--duet-color-button);border:0;border-radius:0;border-bottom-right-radius:var(--duet-radius);border-top-right-radius:var(--duet-radius);box-shadow:inset 1px 0 0 rgba(0, 0, 0, 0.1);color:var(--duet-color-text);cursor:pointer;display:flex;height:calc(100% - 2px);justify-content:center;padding:0;position:absolute;right:1px;top:1px;user-select:none;width:48px;z-index:2}.duet-date__toggle:focus{box-shadow:0 0 0 2px var(--duet-color-primary);outline:0}.duet-date__toggle-icon{display:flex;flex-basis:100%;justify-content:center;align-items:center}.duet-date__dialog{display:flex;left:0;min-width:320px;opacity:0;position:absolute;top:100%;transform:scale(0.96) translateZ(0) translateY(-20px);transform-origin:top right;transition:transform 300ms ease, opacity 300ms ease, visibility 300ms ease;visibility:hidden;width:100%;will-change:transform, opacity, visibility;z-index:var(--duet-z-index)}@media (max-width: 35.9375em){.duet-date__dialog{background:var(--duet-color-overlay);bottom:0;position:fixed;right:0;top:0;transform:translateZ(0);transform-origin:bottom center}}.duet-date__dialog.is-left{left:auto;right:0;width:auto}.duet-date__dialog.is-active{opacity:1;transform:scale(1.0001) translateZ(0) translateY(0);visibility:visible}.duet-date__dialog-content{background:var(--duet-color-surface);border:1px solid rgba(0, 0, 0, 0.1);border-radius:var(--duet-radius);box-shadow:0 4px 10px 0 rgba(0, 0, 0, 0.1);margin-left:auto;margin-top:8px;max-width:310px;min-width:290px;padding:16px 16px 20px;position:relative;transform:none;width:100%;z-index:var(--duet-z-index)}@media (max-width: 35.9375em){.duet-date__dialog-content{border:0;border-radius:0;border-top-left-radius:var(--duet-radius);border-top-right-radius:var(--duet-radius);bottom:0;left:0;margin:0;max-width:none;min-height:26em;opacity:0;padding:0 8% 20px;position:absolute;transform:translateZ(0) translateY(100%);transition:transform 400ms ease, opacity 400ms ease, visibility 400ms ease;visibility:hidden;will-change:transform, opacity, visibility}.is-active .duet-date__dialog-content{opacity:1;transform:translateZ(0) translateY(0);visibility:visible}}.duet-date__table{border-collapse:collapse;border-spacing:0;color:var(--duet-color-text);font-size:1rem;font-weight:var(--duet-font-normal);line-height:1.25;text-align:center;width:100%}.duet-date__table-header{font-size:0.75rem;font-weight:var(--duet-font-bold);letter-spacing:1px;line-height:1.25;padding-bottom:8px;text-decoration:none;text-transform:uppercase}.duet-date__cell{text-align:center}.duet-date__day{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:transparent;border:0;border-radius:50%;color:var(--duet-color-text);cursor:pointer;display:inline-block;font-family:var(--duet-font);font-size:0.875rem;font-variant-numeric:tabular-nums;font-weight:var(--duet-font-normal);height:36px;line-height:1.25;padding:0 0 1px;position:relative;text-align:center;vertical-align:middle;width:36px;z-index:1}.duet-date__day.is-today{box-shadow:0 0 0 1px var(--duet-color-primary);position:relative;z-index:200}.duet-date__day:hover::before,.duet-date__day.is-today::before{background:var(--duet-color-primary);border-radius:50%;bottom:0;content:"";left:0;opacity:0.06;position:absolute;right:0;top:0}[aria-selected=true] .duet-date__day,.duet-date__day:focus{background:var(--duet-color-primary);box-shadow:none;color:var(--duet-color-text-active);outline:0}.duet-date__day:active{background:var(--duet-color-primary);box-shadow:0 0 5px var(--duet-color-primary);color:var(--duet-color-text-active);z-index:200}.duet-date__day:focus{box-shadow:0 0 5px var(--duet-color-primary);z-index:200}.duet-date__day.is-disabled{background:transparent;box-shadow:none;color:var(--duet-color-text);cursor:default;opacity:0.5}.duet-date__day.is-disabled::before{display:none}.duet-date__day.is-outside{background:var(--duet-color-button);box-shadow:none;color:var(--duet-color-text);cursor:default;opacity:0.6;pointer-events:none}.duet-date__day.is-outside::before{display:none}.duet-date__header{align-items:center;display:flex;justify-content:space-between;margin-bottom:16px;width:100%}.duet-date__nav{white-space:nowrap}.duet-date__prev,.duet-date__next{-moz-appearance:none;-webkit-appearance:none;align-items:center;appearance:none;background:var(--duet-color-button);border:0;border-radius:50%;color:var(--duet-color-text);cursor:pointer;display:inline-flex;height:32px;justify-content:center;margin-left:8px;padding:0;transition:background-color 300ms ease;width:32px}@media (max-width: 35.9375em){.duet-date__prev,.duet-date__next{height:40px;width:40px}}.duet-date__prev:focus,.duet-date__next:focus{box-shadow:0 0 0 2px var(--duet-color-primary);outline:0}.duet-date__prev:active:focus,.duet-date__next:active:focus{box-shadow:none}.duet-date__prev:disabled,.duet-date__next:disabled{cursor:default;opacity:0.5}.duet-date__prev svg,.duet-date__next svg{margin:0 auto}.duet-date__select{display:inline-flex;margin-top:4px;position:relative}.duet-date__select span{margin-right:4px}.duet-date__select select{cursor:pointer;font-size:1rem;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%;z-index:2}.duet-date__select select:focus+.duet-date__select-label{box-shadow:0 0 0 2px var(--duet-color-primary)}.duet-date__select-label{align-items:center;border-radius:var(--duet-radius);color:var(--duet-color-text);display:flex;font-size:1.25rem;font-weight:var(--duet-font-bold);line-height:1.25;padding:0 4px 0 8px;pointer-events:none;position:relative;width:100%;z-index:1}.duet-date__select-label svg{width:16px;height:16px}.duet-date__mobile{align-items:center;border-bottom:1px solid rgba(0, 0, 0, 0.12);display:flex;justify-content:space-between;margin-bottom:20px;margin-left:-10%;overflow:hidden;padding:12px 20px;position:relative;text-overflow:ellipsis;white-space:nowrap;width:120%}@media (min-width: 36em){.duet-date__mobile{border:0;margin:0;overflow:visible;padding:0;position:absolute;right:-8px;top:-8px;width:auto}}.duet-date__mobile-heading{display:inline-block;font-weight:var(--duet-font-bold);max-width:84%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 36em){.duet-date__mobile-heading{display:none}}.duet-date__close{-webkit-appearance:none;align-items:center;appearance:none;background:var(--duet-color-button);border:0;border-radius:50%;color:var(--duet-color-text);cursor:pointer;display:flex;height:24px;justify-content:center;padding:0;width:24px}@media (min-width: 36em){.duet-date__close{opacity:0}}.duet-date__close:focus{box-shadow:0 0 0 2px var(--duet-color-primary);outline:none}@media (min-width: 36em){.duet-date__close:focus{opacity:1}}.duet-date__close svg{margin:0 auto}.duet-date__vhidden{border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;padding:0;position:absolute;top:0;width:1px}';export{F as duet_date_picker}