import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
import * as ɵngcc0 from '@angular/core';
export declare class ExtComboboxfieldComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExtComboboxfieldComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ExtComboboxfieldComponent, "ExtComboboxfield", never, {
    "aMe": "aMe";
    "header": "header";
    "renderer": "renderer";
    "label": "label";
    "fitToParent": "fitToParent";
    "tab": "tab";
    "config": "config";
    "platformConfig": "platformConfig";
    "extname": "extname";
    "viewport": "viewport";
    "align": "align";
    "plugins": "plugins";
    "responsiveConfig": "responsiveConfig";
    "responsiveFormulas": "responsiveFormulas";
    "alignSelf": "alignSelf";
    "alignTarget": "alignTarget";
    "allQuery": "allQuery";
    "alwaysOnTop": "alwaysOnTop";
    "animateUnderline": "animateUnderline";
    "anyMatch": "anyMatch";
    "ariaAttributes": "ariaAttributes";
    "ariaDescribedBy": "ariaDescribedBy";
    "ariaLabel": "ariaLabel";
    "ariaLabelledBy": "ariaLabelledBy";
    "autoCapitalize": "autoCapitalize";
    "autoComplete": "autoComplete";
    "autoCorrect": "autoCorrect";
    "autoFitErrors": "autoFitErrors";
    "autoFocus": "autoFocus";
    "autoFocusLast": "autoFocusLast";
    "autoHideInputMask": "autoHideInputMask";
    "autoLoadOnValue": "autoLoadOnValue";
    "autoSelect": "autoSelect";
    "axisLock": "axisLock";
    "badFormatMessage": "badFormatMessage";
    "bind": "bind";
    "bodyAlign": "bodyAlign";
    "border": "border";
    "bottom": "bottom";
    "bubbleDirty": "bubbleDirty";
    "caseSensitive": "caseSensitive";
    "centered": "centered";
    "chipView": "chipView";
    "clearable": "clearable";
    "cls": "cls";
    "collapseOnSelect": "collapseOnSelect";
    "constrainAlign": "constrainAlign";
    "contentEl": "contentEl";
    "controller": "controller";
    "data": "data";
    "dataType": "dataType";
    "defaultListenerScope": "defaultListenerScope";
    "delimiter": "delimiter";
    "dirty": "dirty";
    "disabled": "disabled";
    "displayed": "displayed";
    "displayField": "displayField";
    "displayTpl": "displayTpl";
    "docked": "docked";
    "draggable": "draggable";
    "edgePicker": "edgePicker";
    "editable": "editable";
    "enableRegEx": "enableRegEx";
    "undefined": "undefined";
    "error": "error";
    "errorMessage": "errorMessage";
    "errorTarget": "errorTarget";
    "errorTip": "errorTip";
    "errorTpl": "errorTpl";
    "flex": "flex";
    "floated": "floated";
    "floatedPicker": "floatedPicker";
    "floatedPickerAlign": "floatedPickerAlign";
    "focusCls": "focusCls";
    "focusTrap": "focusTrap";
    "forceSelection": "forceSelection";
    "fullscreen": "fullscreen";
    "height": "height";
    "hidden": "hidden";
    "hiddenName": "hiddenName";
    "hideAnimation": "hideAnimation";
    "hideMode": "hideMode";
    "hideOnMaskTap": "hideOnMaskTap";
    "hideTrigger": "hideTrigger";
    "html": "html";
    "id": "id";
    "inline": "inline";
    "inputMask": "inputMask";
    "inputType": "inputType";
    "inputValue": "inputValue";
    "instanceCls": "instanceCls";
    "itemCls": "itemCls";
    "itemId": "itemId";
    "itemTpl": "itemTpl";
    "keyMap": "keyMap";
    "keyMapEnabled": "keyMapEnabled";
    "keyMapTarget": "keyMapTarget";
    "labelAlign": "labelAlign";
    "labelCls": "labelCls";
    "labelInPlaceholder": "labelInPlaceholder";
    "labelMinWidth": "labelMinWidth";
    "labelTextAlign": "labelTextAlign";
    "labelWidth": "labelWidth";
    "labelWrap": "labelWrap";
    "left": "left";
    "listeners": "listeners";
    "margin": "margin";
    "matchFieldWidth": "matchFieldWidth";
    "maxHeight": "maxHeight";
    "maxLength": "maxLength";
    "maxWidth": "maxWidth";
    "minChars": "minChars";
    "minHeight": "minHeight";
    "minWidth": "minWidth";
    "modal": "modal";
    "modelValidation": "modelValidation";
    "multiSelect": "multiSelect";
    "name": "name";
    "nameable": "nameable";
    "options": "options";
    "padding": "padding";
    "parseValidator": "parseValidator";
    "pattern": "pattern";
    "picker": "picker";
    "pickerSlotAlign": "pickerSlotAlign";
    "placeholder": "placeholder";
    "primaryFilter": "primaryFilter";
    "publishes": "publishes";
    "queryCaching": "queryCaching";
    "queryDelay": "queryDelay";
    "queryMode": "queryMode";
    "queryParam": "queryParam";
    "readOnly": "readOnly";
    "record": "record";
    "recordCreator": "recordCreator";
    "recordCreatorScope": "recordCreatorScope";
    "reference": "reference";
    "relative": "relative";
    "renderTo": "renderTo";
    "required": "required";
    "requiredMessage": "requiredMessage";
    "right": "right";
    "ripple": "ripple";
    "scrollable": "scrollable";
    "selection": "selection";
    "selectOnTab": "selectOnTab";
    "session": "session";
    "shadow": "shadow";
    "shareableName": "shareableName";
    "shim": "shim";
    "showAnimation": "showAnimation";
    "sideError": "sideError";
    "stateful": "stateful";
    "statefulDefaults": "statefulDefaults";
    "stateId": "stateId";
    "store": "store";
    "stripCharsRe": "stripCharsRe";
    "style": "style";
    "tabIndex": "tabIndex";
    "textAlign": "textAlign";
    "tipError": "tipError";
    "titleError": "titleError";
    "toFrontOnShow": "toFrontOnShow";
    "tooltip": "tooltip";
    "top": "top";
    "touchAction": "touchAction";
    "tpl": "tpl";
    "tplWriteMode": "tplWriteMode";
    "translatable": "translatable";
    "triggerAction": "triggerAction";
    "triggers": "triggers";
    "twoWayBindable": "twoWayBindable";
    "typeAhead": "typeAhead";
    "typeAheadDelay": "typeAheadDelay";
    "ui": "ui";
    "underError": "underError";
    "userCls": "userCls";
    "userSelectable": "userSelectable";
    "validateDisabled": "validateDisabled";
    "validationMessage": "validationMessage";
    "validators": "validators";
    "value": "value";
    "valueCollection": "valueCollection";
    "valueField": "valueField";
    "valueNotFoundText": "valueNotFoundText";
    "viewModel": "viewModel";
    "weight": "weight";
    "width": "width";
    "x": "x";
    "xtype": "xtype";
    "y": "y";
    "zIndex": "zIndex";
}, {
    "ready": "ready";
    "created": "created";
    "action": "action";
    "added": "added";
    "beforebottomchange": "beforebottomchange";
    "beforecenteredchange": "beforecenteredchange";
    "beforedisabledchange": "beforedisabledchange";
    "beforedockedchange": "beforedockedchange";
    "beforeheightchange": "beforeheightchange";
    "beforehiddenchange": "beforehiddenchange";
    "beforehide": "beforehide";
    "beforeleftchange": "beforeleftchange";
    "beforemaxHeightchange": "beforemaxHeightchange";
    "beforemaxWidthchange": "beforemaxWidthchange";
    "beforeminHeightchange": "beforeminHeightchange";
    "beforeminWidthchange": "beforeminWidthchange";
    "beforeorientationchange": "beforeorientationchange";
    "beforepickercreate": "beforepickercreate";
    "beforequery": "beforequery";
    "beforerightchange": "beforerightchange";
    "beforescrollablechange": "beforescrollablechange";
    "beforeshow": "beforeshow";
    "beforetofront": "beforetofront";
    "beforetopchange": "beforetopchange";
    "beforewidthchange": "beforewidthchange";
    "blur": "blur";
    "bottomchange": "bottomchange";
    "centeredchange": "centeredchange";
    "change": "change";
    "clearicontap": "clearicontap";
    "click": "click";
    "collapse": "collapse";
    "destroy": "destroy";
    "dirtychange": "dirtychange";
    "disabledchange": "disabledchange";
    "dockedchange": "dockedchange";
    "erased": "erased";
    "errorchange": "errorchange";
    "expand": "expand";
    "floatingchange": "floatingchange";
    "focus": "focus";
    "focusenter": "focusenter";
    "focusleave": "focusleave";
    "fullscreen": "fullscreen";
    "heightchange": "heightchange";
    "hiddenchange": "hiddenchange";
    "hide": "hide";
    "initialize": "initialize";
    "keydown": "keydown";
    "keyup": "keyup";
    "leftchange": "leftchange";
    "maxHeightchange": "maxHeightchange";
    "maxWidthchange": "maxWidthchange";
    "minHeightchange": "minHeightchange";
    "minWidthchange": "minWidthchange";
    "mousedown": "mousedown";
    "moved": "moved";
    "orientationchange": "orientationchange";
    "painted": "painted";
    "paste": "paste";
    "pickercreate": "pickercreate";
    "positionedchange": "positionedchange";
    "removed": "removed";
    "resize": "resize";
    "rightchange": "rightchange";
    "scrollablechange": "scrollablechange";
    "select": "select";
    "show": "show";
    "tofront": "tofront";
    "topchange": "topchange";
    "updatedata": "updatedata";
    "widthchange": "widthchange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0Q29tYm9ib3hmaWVsZC5kLnRzIiwic291cmNlcyI6WyJFeHRDb21ib2JveGZpZWxkLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9ydW50aW1lL2FuZ3VsYXJiYXNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEV4dENvbWJvYm94ZmllbGRDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihlUmVmOiBFbGVtZW50UmVmLCBob3N0Q29tcG9uZW50OiBFbmdCYXNlLCB2YzogVmlld0NvbnRhaW5lclJlZik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=