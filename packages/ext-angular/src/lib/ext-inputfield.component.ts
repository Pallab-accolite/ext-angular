import {
  Injectable,
  Host,
  Optional,
  SkipSelf,
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class inputfieldMetaData {
  public static XTYPE: string = 'inputfield';
  public static PROPERTIESOBJECT: any = {
    "alwaysOnTop": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoFitErrors": "Boolean",
    "axisLock": "Boolean",
    "bind": "Object/String",
    "bodyAlign": "'start'/'center'/'end'/'stretch'",
    "border": "Boolean",
    "bottom": "Number/String",
    "centered": "Boolean",
    "cls": "String/String[]",
    "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
    "contentEl": "Ext.dom.Element/HTMLElement/String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultListenerScope": "Boolean",
    "disabled": "Boolean",
    "displayed": "Boolean",
    "docked": "String",
    "draggable": "Boolean/Object/Ext.drag.Source",
    "enterAnimation": "String/Mixed",
    "error": "String/String[]",
    "errorMessage": "String",
    "errorTarget": "String",
    "errorTip": "Object",
    "errorTpl": "String/String[]/Ext.XTemplate",
    "eventHandlers": "Object",
    "exitAnimation": "String/Mixed",
    "flex": "Number/String/Object",
    "floated": "Boolean",
    "focusCls": "String",
    "fullscreen": "Boolean",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideAnimation": "String/Mixed",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "hideOnMaskTap": "Boolean",
    "html": "String/Ext.dom.Element/HTMLElement",
    "id": "String",
    "inline": "Boolean",
    "inputCls": "String",
    "inputType": "String",
    "inputValue": "any",
    "instanceCls": "String/String[]",
    "itemId": "String",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "label": "String",
    "labelAlign": "'top'/'left'/'bottom'/'right'",
    "labelCls": "String",
    "labelMinWidth": "Number/String",
    "labelTextAlign": "'top'/'right'/'bottom'/'left'",
    "labelWidth": "Number/String",
    "labelWrap": "Boolean",
    "left": "Number/String",
    "listeners": "Object",
    "margin": "Number/String",
    "maxHeight": "Number/String",
    "maxWidth": "Number/String",
    "minHeight": "Number/String",
    "minWidth": "Number/String",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "name": "String",
    "nameable": "Boolean",
    "padding": "Number/String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "readOnly": "Boolean",
    "record": "Ext.data.Model",
    "reference": "String",
    "relative": "Boolean",
    "renderTo": "Ext.dom.Element",
    "required": "Boolean",
    "requiredMessage": "String",
    "right": "Number/String",
    "ripple": "Boolean/Object/String",
    "scrollable": "Boolean/String/Object",
    "selfAlign": "String",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "Boolean",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "showAnimation": "String/Mixed",
    "sideError": "String",
    "stateful": "Boolean/Object/String[]",
    "statefulDefaults": "Object/String[]",
    "stateId": "String",
    "style": "String/Object",
    "tabIndex": "Number",
    "tipError": "String",
    "titleError": "String",
    "toFrontOnShow": "Boolean",
    "tooltip": "String/Object",
    "top": "Number/String",
    "touchAction": "Object",
    "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
    "tplWriteMode": "String",
    "translatable": "Object",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "underError": "String",
    "userCls": "String/String[]",
    "userSelectable": "Boolean/String/Object",
    "validateDisabled": "Boolean",
    "validationMessage": "String",
    "validators": "Mixed",
    "value": "Mixed",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "width": "Number/String",
    "x": "Number",
    "xtype": "String",
    "y": "Number",
    "zIndex": "Number",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoFitErrors',
    'axisLock',
    'bind',
    'bodyAlign',
    'border',
    'bottom',
    'centered',
    'cls',
    'constrainAlign',
    'contentEl',
    'controller',
    'data',
    'defaultListenerScope',
    'disabled',
    'displayed',
    'docked',
    'draggable',
    'enterAnimation',
    'error',
    'errorMessage',
    'errorTarget',
    'errorTip',
    'errorTpl',
    'eventHandlers',
    'exitAnimation',
    'flex',
    'floated',
    'focusCls',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'html',
    'id',
    'inline',
    'inputCls',
    'inputType',
    'inputValue',
    'instanceCls',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'label',
    'labelAlign',
    'labelCls',
    'labelMinWidth',
    'labelTextAlign',
    'labelWidth',
    'labelWrap',
    'left',
    'listeners',
    'margin',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'padding',
    'plugins',
    'publishes',
    'readOnly',
    'record',
    'reference',
    'relative',
    'renderTo',
    'required',
    'requiredMessage',
    'right',
    'ripple',
    'scrollable',
    'selfAlign',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'sideError',
    'stateful',
    'statefulDefaults',
    'stateId',
    'style',
    'tabIndex',
    'tipError',
    'titleError',
    'toFrontOnShow',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'twoWayBindable',
    'ui',
    'underError',
    'userCls',
    'userSelectable',
    'validateDisabled',
    'validationMessage',
    'validators',
    'value',
    'viewModel',
    'weight',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'added',parameters:'sender,container,index'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'sender'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'sender'},
		{name:'beforetofront',parameters:'inputfield'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'inputfield,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'change',parameters:'inputfield,newValue,oldValue'},
		{name:'click',parameters:'e'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'sender'},
		{name:'errorchange',parameters:'inputfield,error'},
		{name:'floatingchange',parameters:'sender,positioned'},
		{name:'focus',parameters:'inputfield,event'},
		{name:'focusenter',parameters:'inputfield,event'},
		{name:'focusleave',parameters:'inputfield,event'},
		{name:'fullscreen',parameters:'sender'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'sender'},
		{name:'initialize',parameters:'sender'},
		{name:'keyup',parameters:'e'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'mousedown',parameters:'e'},
		{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'sender,element'},
		{name:'paste',parameters:'e'},
		{name:'positionedchange',parameters:'sender,positioned'},
		{name:'removed',parameters:'sender,container,index'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'sender'},
		{name:'tofront',parameters:'inputfield'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'sender,newData'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'added',
		'beforebottomchange',
		'beforecenteredchange',
		'beforedisabledchange',
		'beforedockedchange',
		'beforeheightchange',
		'beforehiddenchange',
		'beforehide',
		'beforeleftchange',
		'beforemaxHeightchange',
		'beforemaxWidthchange',
		'beforeminHeightchange',
		'beforeminWidthchange',
		'beforeorientationchange',
		'beforerightchange',
		'beforescrollablechange',
		'beforeshow',
		'beforetofront',
		'beforetopchange',
		'beforewidthchange',
		'blur',
		'bottomchange',
		'centeredchange',
		'change',
		'click',
		'destroy',
		'disabledchange',
		'dockedchange',
		'erased',
		'errorchange',
		'floatingchange',
		'focus',
		'focusenter',
		'focusleave',
		'fullscreen',
		'heightchange',
		'hiddenchange',
		'hide',
		'initialize',
		'keyup',
		'leftchange',
		'maxHeightchange',
		'maxWidthchange',
		'minHeightchange',
		'minWidthchange',
		'mousedown',
		'moved',
		'orientationchange',
		'painted',
		'paste',
		'positionedchange',
		'removed',
		'resize',
		'rightchange',
		'scrollablechange',
		'show',
		'tofront',
		'topchange',
		'updatedata',
		'widthchange',
		'ready'
];
}
@Component({
  selector: 'inputfield', 
  inputs: inputfieldMetaData.PROPERTIES,
  outputs: inputfieldMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtInputfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtInputfieldComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(
    eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : base) {
      super(eRef.nativeElement,inputfieldMetaData,hostComponent)
    }
  public ngOnInit() {
    this.baseOnInit(inputfieldMetaData)
  }
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
  }
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}

}