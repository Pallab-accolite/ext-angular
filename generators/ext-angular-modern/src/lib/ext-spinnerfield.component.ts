import {
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class spinnerfieldMetaData {
  public static XTYPE: string = 'spinnerfield';
  public static PROPERTIESOBJECT: any = {
    "accelerateOnTapHold": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "animateUnderline": "Boolean",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoCapitalize": "Boolean",
    "autoComplete": "Boolean",
    "autoCorrect": "Boolean",
    "autoFitErrors": "Boolean",
    "autoHideInputMask": "Boolean",
    "axisLock": "Boolean",
    "badFormatMessage": "String",
    "bind": "Object/String",
    "bodyAlign": "any",
    "border": "Boolean",
    "bottom": "Number/String",
    "centered": "Boolean",
    "clearable": "Boolean",
    "cls": "String/String[]",
    "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
    "contentEl": "Ext.dom.Element/HTMLElement/String",
    "controller": "String/Object/Ext.app.ViewController",
    "cycle": "Boolean",
    "data": "Object",
    "decimals": "Number",
    "decimalsText": "String",
    "defaultListenerScope": "Boolean",
    "disabled": "Boolean",
    "displayed": "Boolean",
    "docked": "String",
    "draggable": "Boolean/Object/Ext.drag.Source",
    "editable": "Boolean",
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
    "groupButtons": "Boolean",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideAnimation": "String/Mixed",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "hideOnMaskTap": "Boolean",
    "html": "String/Ext.dom.Element/HTMLElement",
    "id": "String",
    "inline": "Boolean",
    "inputCls": "String",
    "inputMask": "String/Ext.field.InputMask",
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
    "labelInPlaceholder": "any",
    "labelMinWidth": "Number/String",
    "labelTextAlign": "'top'/'right'/'bottom'/'left'",
    "labelWidth": "Number/String",
    "labelWrap": "Boolean",
    "left": "Number/String",
    "listeners": "Object",
    "margin": "Number/String",
    "maxHeight": "Number/String",
    "maxLength": "Number",
    "maxValue": "Number",
    "maxValueText": "String",
    "maxWidth": "Number/String",
    "minHeight": "Number/String",
    "minValue": "Number",
    "minValueText": "String",
    "minWidth": "Number/String",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "name": "String",
    "nameable": "Boolean",
    "padding": "Number/String",
    "parseValidator": "Ext.data.validator.Validator",
    "pattern": "String",
    "placeholder": "String",
    "placeHolder": "String",
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
    "stepValue": "Number",
    "style": "String/Object",
    "tabIndex": "Number",
    "textAlign": "'left'/'center'/'right'",
    "tipError": "String",
    "titleError": "String",
    "toFrontOnShow": "Boolean",
    "tooltip": "String/Object",
    "top": "Number/String",
    "touchAction": "Object",
    "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
    "tplWriteMode": "String",
    "translatable": "Object",
    "triggers": "Object",
    "trim": "Boolean",
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
    'accelerateOnTapHold',
    'alwaysOnTop',
    'animateUnderline',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoCapitalize',
    'autoComplete',
    'autoCorrect',
    'autoFitErrors',
    'autoHideInputMask',
    'axisLock',
    'badFormatMessage',
    'bind',
    'bodyAlign',
    'border',
    'bottom',
    'centered',
    'clearable',
    'cls',
    'constrainAlign',
    'contentEl',
    'controller',
    'cycle',
    'data',
    'decimals',
    'decimalsText',
    'defaultListenerScope',
    'disabled',
    'displayed',
    'docked',
    'draggable',
    'editable',
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
    'groupButtons',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'html',
    'id',
    'inline',
    'inputCls',
    'inputMask',
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
    'labelInPlaceholder',
    'labelMinWidth',
    'labelTextAlign',
    'labelWidth',
    'labelWrap',
    'left',
    'listeners',
    'margin',
    'maxHeight',
    'maxLength',
    'maxValue',
    'maxValueText',
    'maxWidth',
    'minHeight',
    'minValue',
    'minValueText',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'padding',
    'parseValidator',
    'pattern',
    'placeholder',
    'placeHolder',
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
    'stepValue',
    'style',
    'tabIndex',
    'textAlign',
    'tipError',
    'titleError',
    'toFrontOnShow',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'triggers',
    'trim',
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
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'action',parameters:''},
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
		{name:'beforetofront',parameters:'spinnerfield'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'spinnerfield,e'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'change',parameters:'spinnerfield,newValue,oldValue'},
		{name:'clearicontap',parameters:'spinnerfield,input,e'},
		{name:'click',parameters:'e'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'sender'},
		{name:'errorchange',parameters:'spinnerfield,error'},
		{name:'floatingchange',parameters:'sender,positioned'},
		{name:'focus',parameters:'spinnerfield,e'},
		{name:'focusenter',parameters:'spinnerfield,event'},
		{name:'focusleave',parameters:'spinnerfield,event'},
		{name:'fullscreen',parameters:'sender'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'sender'},
		{name:'initialize',parameters:'sender'},
		{name:'keyup',parameters:'spinnerfield,e'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'mousedown',parameters:'spinnerfield,e'},
		{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'sender,element'},
		{name:'paste',parameters:'spinnerfield,e'},
		{name:'positionedchange',parameters:'sender,positioned'},
		{name:'removed',parameters:'sender,container,index'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'sender'},
		{name:'spin',parameters:'spinnerfield,value,direction'},
		{name:'spindown',parameters:'spinnerfield,value'},
		{name:'spinup',parameters:'spinnerfield,value'},
		{name:'tofront',parameters:'spinnerfield'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:''},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'action',
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
		'clearicontap',
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
		'spin',
		'spindown',
		'spinup',
		'tofront',
		'topchange',
		'updatedata',
		'widthchange',
		'ready'
];
}
@Component({
  selector: 'spinnerfield', 
  inputs: spinnerfieldMetaData.PROPERTIES,
  outputs: spinnerfieldMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtSpinnerfieldComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtSpinnerfieldComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,spinnerfieldMetaData)}
  public ngOnInit() {this.baseOnInit(spinnerfieldMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}