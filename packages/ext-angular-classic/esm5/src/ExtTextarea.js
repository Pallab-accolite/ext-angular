import { __decorate, __extends, __param } from "tslib";
//import EWCTextarea from '../dist/ext-textarea.component.js';
//inputs: (new EWCTextarea()).properties,
//import EWCTextarea from '@sencha/ext-web-components-classic/dist/ext-textarea.component.js';
import { EWCTextarea } from '@sencha/ext-web-components-classic';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
var ExtTextareaComponent = /** @class */ (function (_super) {
    __extends(ExtTextareaComponent, _super);
    function ExtTextareaComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'activeError', 'activeErrorsTpl', 'afterBodyEl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'alignOnScroll', 'alignTarget', 'allowBlank', 'allowOnlyWhitespace', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaErrorText', 'ariaHelp', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoFitErrors', 'autoHideInputMask', 'autoRender', 'undefined', 'autoShow', 'baseBodyCls', 'baseCls', 'beforeBodyEl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'bind', 'blankText', 'border', 'checkChangeBuffer', 'checkChangeEvents', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'dirtyCls', 'disabled', 'disabledCls', 'disableKeyFilter', 'dock', 'draggable', 'editable', 'emptyCls', 'emptyText', 'enableKeyEvents', 'enforceMaxLength', 'enterIsSpecial', 'errorMsgCls', 'fieldBodyCls', 'fieldCls', 'fieldLabel', 'fieldStyle', 'fieldSubTpl', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'undefined', 'formBind', 'formItemCls', 'frame', 'grow', 'growAppend', 'growMax', 'growMin', 'height', 'hidden', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'hideTrigger', 'html', 'id', 'inputAttrTpl', 'inputId', 'inputMask', 'inputType', 'inputWrapCls', 'invalidCls', 'invalidText', 'isTextInput', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maskRe', 'maxHeight', 'maxLength', 'maxLengthText', 'maxWidth', 'minHeight', 'minLength', 'minLengthText', 'minWidth', 'modal', 'modelValidation', 'msgTarget', 'name', 'nameable', 'overCls', 'undefined', 'undefined', 'padding', 'plugins', 'preventMark', 'preventScrollbars', 'publishes', 'readOnly', 'readOnlyCls', 'reference', 'regex', 'regexText', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'repeatTriggerClick', 'requiredCls', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectOnFocus', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'stateEvents', 'stateful', 'stateId', 'stripCharsRe', 'style', 'submitValue', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'triggers', 'triggerWrapCls', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'validateBlank', 'validateOnBlur', 'validateOnChange', 'validateOnFocusLeave', 'validation', 'validationField', 'validator', 'value', 'valuePublishEvent', 'viewModel', 'vtype', 'vtypeText', 'weight', 'width', 'xtype',], (new EWCTextarea()).events, ['ready', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'autosize', 'beforeactivate', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'change', 'deactivate', 'destroy', 'dirtychange', 'disable', 'enable', 'errorchange', 'focus', 'focusenter', 'focusleave', 'hide', 'keydown', 'keypress', 'keyup', 'move', 'paste', 'removed', 'render', 'resize', 'show', 'specialkey', 'staterestore', 'statesave', 'validitychange', 'writeablechange',], vc) || this;
        _this.xtype = 'textarea';
        return _this;
    }
    ExtTextareaComponent_1 = ExtTextareaComponent;
    ExtTextareaComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtTextareaComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtTextareaComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtTextareaComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtTextareaComponent_1;
    ExtTextareaComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtTextareaComponent = ExtTextareaComponent_1 = __decorate([
        Component({
            selector: 'ExtTextarea',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'activeError', 'activeErrorsTpl', 'afterBodyEl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'alignOnScroll', 'alignTarget', 'allowBlank', 'allowOnlyWhitespace', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaErrorText', 'ariaHelp', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoFitErrors', 'autoHideInputMask', 'autoRender', 'undefined', 'autoShow', 'baseBodyCls', 'baseCls', 'beforeBodyEl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'bind', 'blankText', 'border', 'checkChangeBuffer', 'checkChangeEvents', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'dirtyCls', 'disabled', 'disabledCls', 'disableKeyFilter', 'dock', 'draggable', 'editable', 'emptyCls', 'emptyText', 'enableKeyEvents', 'enforceMaxLength', 'enterIsSpecial', 'errorMsgCls', 'fieldBodyCls', 'fieldCls', 'fieldLabel', 'fieldStyle', 'fieldSubTpl', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'undefined', 'formBind', 'formItemCls', 'frame', 'grow', 'growAppend', 'growMax', 'growMin', 'height', 'hidden', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'hideTrigger', 'html', 'id', 'inputAttrTpl', 'inputId', 'inputMask', 'inputType', 'inputWrapCls', 'invalidCls', 'invalidText', 'isTextInput', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maskRe', 'maxHeight', 'maxLength', 'maxLengthText', 'maxWidth', 'minHeight', 'minLength', 'minLengthText', 'minWidth', 'modal', 'modelValidation', 'msgTarget', 'name', 'nameable', 'overCls', 'undefined', 'undefined', 'padding', 'plugins', 'preventMark', 'preventScrollbars', 'publishes', 'readOnly', 'readOnlyCls', 'reference', 'regex', 'regexText', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'repeatTriggerClick', 'requiredCls', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectOnFocus', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'stateEvents', 'stateful', 'stateId', 'stripCharsRe', 'style', 'submitValue', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'triggers', 'triggerWrapCls', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'validateBlank', 'validateOnBlur', 'validateOnChange', 'validateOnFocusLeave', 'validation', 'validationField', 'validator', 'value', 'valuePublishEvent', 'viewModel', 'vtype', 'vtypeText', 'weight', 'width', 'xtype',],
            outputs: ['ready', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'autosize', 'beforeactivate', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'change', 'deactivate', 'destroy', 'dirtychange', 'disable', 'enable', 'errorchange', 'focus', 'focusenter', 'focusleave', 'hide', 'keydown', 'keypress', 'keyup', 'move', 'paste', 'removed', 'render', 'resize', 'show', 'specialkey', 'staterestore', 'statesave', 'validitychange', 'writeablechange',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtTextareaComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
    ], ExtTextareaComponent);
    return ExtTextareaComponent;
}(EngBase));
export { ExtTextareaComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCTextarea()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0VGV4dGFyZWEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWNsYXNzaWMvIiwic291cmNlcyI6WyJzcmMvRXh0VGV4dGFyZWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhEQUE4RDtBQUM5RCx5Q0FBeUM7QUFDekMsOEZBQThGO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNqRSxPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVNoRDtJQUEwQyx3Q0FBTztJQUM3Qyw4QkFDSSxJQUFnQixFQUNnQixhQUFzQixFQUN0RCxFQUFvQjtRQUh4QixZQUtJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUMsaUJBQWlCLEVBQUMsYUFBYSxFQUFDLG1CQUFtQixFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxZQUFZLEVBQUMscUJBQXFCLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxtQkFBbUIsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxhQUFhLEVB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QUFwQixDQUFvQixDQUFDLEVBQUMsQ0FBQztZQUNwRixRQUFRLEVBQUUsMkJBQTJCO1NBQ3hDLENBQUM7UUFJTyxXQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7T0FIMUIsb0JBQW9CLENBZ0NoQztJQUFELDJCQUFDO0NBQUEsQUFoQ0QsQ0FBMEMsT0FBTyxHQWdDaEQ7U0FoQ1ksb0JBQW9CO0FBbUNqQyw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyxpRkFBaUY7QUFDakYsYUFBYTtBQUNiLG9CQUFvQjtBQUNwQixJQUFJO0FBQ0oseUNBQXlDO0FBRXpDLDhDQUE4QztBQUM5Qyx5QkFBeUI7QUFDekIsMkNBQTJDO0FBQzNDLG9DQUFvQztBQUNwQyxJQUFJO0FBQ0osNENBQTRDO0FBQzVDLG1CQUFtQjtBQUNuQiwyQ0FBMkM7QUFDM0MsR0FBRztBQUNILGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IEVXQ1RleHRhcmVhIGZyb20gJy4uL2Rpc3QvZXh0LXRleHRhcmVhLmNvbXBvbmVudC5qcyc7XG4vL2lucHV0czogKG5ldyBFV0NUZXh0YXJlYSgpKS5wcm9wZXJ0aWVzLFxuLy9pbXBvcnQgRVdDVGV4dGFyZWEgZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYy9kaXN0L2V4dC10ZXh0YXJlYS5jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgRVdDVGV4dGFyZWEgfSBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1jbGFzc2ljJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL3J1bnRpbWUvYW5ndWxhcmJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ0V4dFRleHRhcmVhJyxcbiAgICBpbnB1dHM6IFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aXZlQ291bnRlcicsJ2FjdGl2ZUVycm9yJywnYWN0aXZlRXJyb3JzVHBsJywnYWZ0ZXJCb2R5RWwnLCdhZnRlckxhYmVsVGV4dFRwbCcsJ2FmdGVyTGFiZWxUcGwnLCdhZnRlclN1YlRwbCcsJ2FsaWduT25TY3JvbGwnLCdhbGlnblRhcmdldCcsJ2FsbG93QmxhbmsnLCdhbGxvd09ubHlXaGl0ZXNwYWNlJywnYWx3YXlzT25Ub3AnLCdhbmNob3InLCdhbmltYXRlU2hhZG93JywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhRXJyb3JUZXh0JywnYXJpYUhlbHAnLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9FbCcsJ2F1dG9GaXRFcnJvcnMnLCdhdXRvSGlkZUlucHV0TWFzaycsJ2F1dG9SZW5kZXInLCd1bmRlZmluZWQnLCdhdXRvU2hvdycsJ2Jhc2VCb2R5Q2xzJywnYmFzZUNscycsJ2JlZm9yZUJvZHlFbCcsJ2JlZm9yZUxhYmVsVGV4dFRwbCcsJ2JlZm9yZUxhYmVsVHBsJywnYmVmb3JlU3ViVHBsJywnYmluZCcsJ2JsYW5rVGV4dCcsJ2JvcmRlcicsJ2NoZWNrQ2hhbmdlQnVmZmVyJywnY2hlY2tDaGFuZ2VFdmVudHMnLCdjaGlsZEVscycsJ2NscycsJ2NvbHVtbldpZHRoJywnY29tcG9uZW50Q2xzJywnY29tcG9uZW50TGF5b3V0JywnY29uc3RyYWluJywnY29uc3RyYWludEluc2V0cycsJ2NvbnN0cmFpblRvJywnY29udGVudEVsJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0QWxpZ24nLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RpcnR5Q2xzJywnZGlzYWJsZWQnLCdkaXNhYmxlZENscycsJ2Rpc2FibGVLZXlGaWx0ZXInLCdkb2NrJywnZHJhZ2dhYmxlJywnZWRpdGFibGUnLCdlbXB0eUNscycsJ2VtcHR5VGV4dCcsJ2VuYWJsZUtleUV2ZW50cycsJ2VuZm9yY2VNYXhMZW5ndGgnLCdlbnRlcklzU3BlY2lhbCcsJ2Vycm9yTXNnQ2xzJywnZmllbGRCb2R5Q2xzJywnZmllbGRDbHMnLCdmaWVsZExhYmVsJywnZmllbGRTdHlsZScsJ2ZpZWxkU3ViVHBsJywnZml4ZWQnLCdmbGV4JywnZmxvYXRpbmcnLCdmb2N1c0NscycsJ2ZvY3VzT25Ub0Zyb250JywndW5kZWZpbmVkJywnZm9ybUJpbmQnLCdmb3JtSXRlbUNscycsJ2ZyYW1lJywnZ3JvdycsJ2dyb3dBcHBlbmQnLCdncm93TWF4JywnZ3Jvd01pbicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVFbXB0eUxhYmVsJywnaGlkZUxhYmVsJywnaGlkZU1vZGUnLCdoaWRlVHJpZ2dlcicsJ2h0bWwnLCdpZCcsJ2lucHV0QXR0clRwbCcsJ2lucHV0SWQnLCdpbnB1dE1hc2snLCdpbnB1dFR5cGUnLCdpbnB1dFdyYXBDbHMnLCdpbnZhbGlkQ2xzJywnaW52YWxpZFRleHQnLCdpc1RleHRJbnB1dCcsJ2l0ZW1JZCcsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYWJlbGFibGVSZW5kZXJUcGwnLCdsYWJlbEFsaWduJywnbGFiZWxBdHRyVHBsJywnbGFiZWxDbHMnLCdsYWJlbENsc0V4dHJhJywnbGFiZWxQYWQnLCdsYWJlbFNlcGFyYXRvcicsJ2xhYmVsU3R5bGUnLCdsYWJlbFdpZHRoJywnbGlxdWlkTGF5b3V0JywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdtYXJnaW4nLCdtYXNrRGVmYXVsdHMnLCdtYXNrRWxlbWVudCcsJ21hc2tSZScsJ21heEhlaWdodCcsJ21heExlbmd0aCcsJ21heExlbmd0aFRleHQnLCdtYXhXaWR0aCcsJ21pbkhlaWdodCcsJ21pbkxlbmd0aCcsJ21pbkxlbmd0aFRleHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbXNnVGFyZ2V0JywnbmFtZScsJ25hbWVhYmxlJywnb3ZlckNscycsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ3BhZGRpbmcnLCdwbHVnaW5zJywncHJldmVudE1hcmsnLCdwcmV2ZW50U2Nyb2xsYmFycycsJ3B1Ymxpc2hlcycsJ3JlYWRPbmx5JywncmVhZE9ubHlDbHMnLCdyZWZlcmVuY2UnLCdyZWdleCcsJ3JlZ2V4VGV4dCcsJ3JlZ2lvbicsJ3JlbmRlckNvbmZpZycsJ3JlbmRlckRhdGEnLCd1bmRlZmluZWQnLCdyZW5kZXJUbycsJ3JlbmRlclRwbCcsJ3JlcGVhdFRyaWdnZXJDbGljaycsJ3JlcXVpcmVkQ2xzJywncmVzaXphYmxlJywncmVzaXplSGFuZGxlcycsJ3NhdmVEZWxheScsJ3Njcm9sbGFibGUnLCdzZWxlY3RPbkZvY3VzJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3VuZGVmaW5lZCcsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3RyaXBDaGFyc1JlJywnc3R5bGUnLCdzdWJtaXRWYWx1ZScsJ3RhYkluZGV4JywndG9Gcm9udE9uU2hvdycsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHJpZ2dlcnMnLCd0cmlnZ2VyV3JhcENscycsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1aUNscycsJ3VzZXJDbHMnLCd2YWxpZGF0ZUJsYW5rJywndmFsaWRhdGVPbkJsdXInLCd2YWxpZGF0ZU9uQ2hhbmdlJywndmFsaWRhdGVPbkZvY3VzTGVhdmUnLCd2YWxpZGF0aW9uJywndmFsaWRhdGlvbkZpZWxkJywndmFsaWRhdG9yJywndmFsdWUnLCd2YWx1ZVB1Ymxpc2hFdmVudCcsJ3ZpZXdNb2RlbCcsJ3Z0eXBlJywndnR5cGVUZXh0Jywnd2VpZ2h0Jywnd2lkdGgnLCd4dHlwZScsXSxcbiAgICBvdXRwdXRzOiBbJ3JlYWR5JywnYWN0aXZhdGUnLCdhZGRlZCcsJ2FmdGVybGF5b3V0YW5pbWF0aW9uJywnYWZ0ZXJyZW5kZXInLCdhdXRvc2l6ZScsJ2JlZm9yZWFjdGl2YXRlJywnYmVmb3JlZGVhY3RpdmF0ZScsJ2JlZm9yZWRlc3Ryb3knLCdiZWZvcmVoaWRlJywnYmVmb3JlcmVuZGVyJywnYmVmb3Jlc2hvdycsJ2JlZm9yZXN0YXRlcmVzdG9yZScsJ2JlZm9yZXN0YXRlc2F2ZScsJ2JsdXInLCdib3hyZWFkeScsJ2NoYW5nZScsJ2RlYWN0aXZhdGUnLCdkZXN0cm95JywnZGlydHljaGFuZ2UnLCdkaXNhYmxlJywnZW5hYmxlJywnZXJyb3JjaGFuZ2UnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGlkZScsJ2tleWRvd24nLCdrZXlwcmVzcycsJ2tleXVwJywnbW92ZScsJ3Bhc3RlJywncmVtb3ZlZCcsJ3JlbmRlcicsJ3Jlc2l6ZScsJ3Nob3cnLCdzcGVjaWFsa2V5Jywnc3RhdGVyZXN0b3JlJywnc3RhdGVzYXZlJywndmFsaWRpdHljaGFuZ2UnLCd3cml0ZWFibGVjaGFuZ2UnLF0sXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFRleHRhcmVhQ29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0VGV4dGFyZWFDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aXZlQ291bnRlcicsJ2FjdGl2ZUVycm9yJywnYWN0aXZlRXJyb3JzVHBsJywnYWZ0ZXJCb2R5RWwnLCdhZnRlckxhYmVsVGV4dFRwbCcsJ2FmdGVyTGFiZWxUcGwnLCdhZnRlclN1YlRwbCcsJ2FsaWduT25TY3JvbGwnLCdhbGlnblRhcmdldCcsJ2FsbG93QmxhbmsnLCdhbGxvd09ubHlXaGl0ZXNwYWNlJywnYWx3YXlzT25Ub3AnLCdhbmNob3InLCdhbmltYXRlU2hhZG93JywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhRXJyb3JUZXh0JywnYXJpYUhlbHAnLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9FbCcsJ2F1dG9GaXRFcnJvcnMnLCdhdXRvSGlkZUlucHV0TWFzaycsJ2F1dG9SZW5kZXInLCd1bmRlZmluZWQnLCdhdXRvU2hvdycsJ2Jhc2VCb2R5Q2xzJywnYmFzZUNscycsJ2JlZm9yZUJvZHlFbCcsJ2JlZm9yZUxhYmVsVGV4dFRwbCcsJ2JlZm9yZUxhYmVsVHBsJywnYmVmb3JlU3ViVHBsJywnYmluZCcsJ2JsYW5rVGV4dCcsJ2JvcmRlcicsJ2NoZWNrQ2hhbmdlQnVmZmVyJywnY2hlY2tDaGFuZ2VFdmVudHMnLCdjaGlsZEVscycsJ2NscycsJ2NvbHVtbldpZHRoJywnY29tcG9uZW50Q2xzJywnY29tcG9uZW50TGF5b3V0JywnY29uc3RyYWluJywnY29uc3RyYWludEluc2V0cycsJ2NvbnN0cmFpblRvJywnY29udGVudEVsJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0QWxpZ24nLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RpcnR5Q2xzJywnZGlzYWJsZWQnLCdkaXNhYmxlZENscycsJ2Rpc2FibGVLZXlGaWx0ZXInLCdkb2NrJywnZHJhZ2dhYmxlJywnZWRpdGFibGUnLCdlbXB0eUNscycsJ2VtcHR5VGV4dCcsJ2VuYWJsZUtleUV2ZW50cycsJ2VuZm9yY2VNYXhMZW5ndGgnLCdlbnRlcklzU3BlY2lhbCcsJ2Vycm9yTXNnQ2xzJywnZmllbGRCb2R5Q2xzJywnZmllbGRDbHMnLCdmaWVsZExhYmVsJywnZmllbGRTdHlsZScsJ2ZpZWxkU3ViVHBsJywnZml4ZWQnLCdmbGV4JywnZmxvYXRpbmcnLCdmb2N1c0NscycsJ2ZvY3VzT25Ub0Zyb250JywndW5kZWZpbmVkJywnZm9ybUJpbmQnLCdmb3JtSXRlbUNscycsJ2ZyYW1lJywnZ3JvdycsJ2dyb3dBcHBlbmQnLCdncm93TWF4JywnZ3Jvd01pbicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVFbXB0eUxhYmVsJywnaGlkZUxhYmVsJywnaGlkZU1vZGUnLCdoaWRlVHJpZ2dlcicsJ2h0bWwnLCdpZCcsJ2lucHV0QXR0clRwbCcsJ2lucHV0SWQnLCdpbnB1dE1hc2snLCdpbnB1dFR5cGUnLCdpbnB1dFdyYXBDbHMnLCdpbnZhbGlkQ2xzJywnaW52YWxpZFRleHQnLCdpc1RleHRJbnB1dCcsJ2l0ZW1JZCcsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYWJlbGFibGVSZW5kZXJUcGwnLCdsYWJlbEFsaWduJywnbGFiZWxBdHRyVHBsJywnbGFiZWxDbHMnLCdsYWJlbENsc0V4dHJhJywnbGFiZWxQYWQnLCdsYWJlbFNlcGFyYXRvcicsJ2xhYmVsU3R5bGUnLCdsYWJlbFdpZHRoJywnbGlxdWlkTGF5b3V0JywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdtYXJnaW4nLCdtYXNrRGVmYXVsdHMnLCdtYXNrRWxlbWVudCcsJ21hc2tSZScsJ21heEhlaWdodCcsJ21heExlbmd0aCcsJ21heExlbmd0aFRleHQnLCdtYXhXaWR0aCcsJ21pbkhlaWdodCcsJ21pbkxlbmd0aCcsJ21pbkxlbmd0aFRleHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbXNnVGFyZ2V0JywnbmFtZScsJ25hbWVhYmxlJywnb3ZlckNscycsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ3BhZGRpbmcnLCdwbHVnaW5zJywncHJldmVudE1hcmsnLCdwcmV2ZW50U2Nyb2xsYmFycycsJ3B1Ymxpc2hlcycsJ3JlYWRPbmx5JywncmVhZE9ubHlDbHMnLCdyZWZlcmVuY2UnLCdyZWdleCcsJ3JlZ2V4VGV4dCcsJ3JlZ2lvbicsJ3JlbmRlckNvbmZpZycsJ3JlbmRlckRhdGEnLCd1bmRlZmluZWQnLCdyZW5kZXJUbycsJ3JlbmRlclRwbCcsJ3JlcGVhdFRyaWdnZXJDbGljaycsJ3JlcXVpcmVkQ2xzJywncmVzaXphYmxlJywncmVzaXplSGFuZGxlcycsJ3NhdmVEZWxheScsJ3Njcm9sbGFibGUnLCdzZWxlY3RPbkZvY3VzJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3VuZGVmaW5lZCcsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3RyaXBDaGFyc1JlJywnc3R5bGUnLCdzdWJtaXRWYWx1ZScsJ3RhYkluZGV4JywndG9Gcm9udE9uU2hvdycsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHJpZ2dlcnMnLCd0cmlnZ2VyV3JhcENscycsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1aUNscycsJ3VzZXJDbHMnLCd2YWxpZGF0ZUJsYW5rJywndmFsaWRhdGVPbkJsdXInLCd2YWxpZGF0ZU9uQ2hhbmdlJywndmFsaWRhdGVPbkZvY3VzTGVhdmUnLCd2YWxpZGF0aW9uJywndmFsaWRhdGlvbkZpZWxkJywndmFsaWRhdG9yJywndmFsdWUnLCd2YWx1ZVB1Ymxpc2hFdmVudCcsJ3ZpZXdNb2RlbCcsJ3Z0eXBlJywndnR5cGVUZXh0Jywnd2VpZ2h0Jywnd2lkdGgnLCd4dHlwZScsXSxcbiAgICAgICAgICAgIChuZXcgRVdDVGV4dGFyZWEoKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2FjdGl2YXRlJywnYWRkZWQnLCdhZnRlcmxheW91dGFuaW1hdGlvbicsJ2FmdGVycmVuZGVyJywnYXV0b3NpemUnLCdiZWZvcmVhY3RpdmF0ZScsJ2JlZm9yZWRlYWN0aXZhdGUnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlaGlkZScsJ2JlZm9yZXJlbmRlcicsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdGF0ZXJlc3RvcmUnLCdiZWZvcmVzdGF0ZXNhdmUnLCdibHVyJywnYm94cmVhZHknLCdjaGFuZ2UnLCdkZWFjdGl2YXRlJywnZGVzdHJveScsJ2RpcnR5Y2hhbmdlJywnZGlzYWJsZScsJ2VuYWJsZScsJ2Vycm9yY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2hpZGUnLCdrZXlkb3duJywna2V5cHJlc3MnLCdrZXl1cCcsJ21vdmUnLCdwYXN0ZScsJ3JlbW92ZWQnLCdyZW5kZXInLCdyZXNpemUnLCdzaG93Jywnc3BlY2lhbGtleScsJ3N0YXRlcmVzdG9yZScsJ3N0YXRlc2F2ZScsJ3ZhbGlkaXR5Y2hhbmdlJywnd3JpdGVhYmxlY2hhbmdlJyxdLFxuICAgICAgICAgICAgdmNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3RleHRhcmVhJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvUGFzY2FsQ2FzZShzKSB7XG4vLyAgICAgcmV0dXJuIHMubWF0Y2goL1thLXpdKy9naSlcbi8vICAgICAgICAgLm1hcChmdW5jdGlvbiAod29yZCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5qb2luKCcnKVxuLy8gfVxuLy8gdmFyIHBhc2NhbE5hbWUgPSB0b1Bhc2NhbENhc2UodGFnTmFtZSlcblxuLy92YXIgZXZlbnRzID0gKG5ldyBFV0NUZXh0YXJlYSgpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19