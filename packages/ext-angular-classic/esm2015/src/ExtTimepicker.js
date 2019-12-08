var ExtTimepickerComponent_1;
import * as tslib_1 from "tslib";
//import EWCTimepicker from '../dist/ext-timepicker.component.js';
//inputs: (new EWCTimepicker()).properties,
import EWCTimepicker from '@sencha/ext-web-components-classic/dist/ext-timepicker.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
let ExtTimepickerComponent = ExtTimepickerComponent_1 = class ExtTimepickerComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'blockRefresh', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'deferEmptyText', 'deferInitialRefresh', 'disabled', 'disabledCls', 'disableSelection', 'displayField', 'dock', 'draggable', 'emptyText', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'format', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'increment', 'itemCls', 'itemId', 'itemSelector', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'loadingCls', 'loadingHeight', 'loadingText', 'loadingUseMsg', 'loadMask', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxValue', 'maxWidth', 'minHeight', 'minValue', 'minWidth', 'modal', 'modelValidation', 'undefined', 'nameable', 'navigationModel', 'overCls', 'undefined', 'undefined', 'overItemCls', 'padding', 'pageSize', 'plugins', 'preserveScrollOnRefresh', 'preserveScrollOnReload', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectedItemCls', 'selection', 'selectionModel', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'singleSelect', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'tabIndex', 'throttledUpdate', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trackOver', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype',], (new EWCTimepicker()).events, ['ready', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforecontainerclick', 'beforecontainercontextmenu', 'beforecontainerdblclick', 'beforecontainerkeydown', 'beforecontainerkeypress', 'beforecontainerkeyup', 'beforecontainermousedown', 'beforecontainermouseout', 'beforecontainermouseover', 'beforecontainermouseup', 'beforedeactivate', 'beforedeselect', 'beforedestroy', 'beforehide', 'beforeitemclick', 'beforeitemcontextmenu', 'beforeitemdblclick', 'beforeitemkeydown', 'beforeitemkeypress', 'beforeitemkeyup', 'beforeitemlongpress', 'beforeitemmousedown', 'beforeitemmouseenter', 'beforeitemmouseleave', 'beforeitemmouseup', 'beforerefresh', 'beforerender', 'beforeselect', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'containerclick', 'containercontextmenu', 'containerdblclick', 'containerkeydown', 'containerkeypress', 'containerkeyup', 'containermousedown', 'containermouseout', 'containermouseover', 'containermouseup', 'deactivate', 'deselect', 'destroy', 'disable', 'enable', 'focus', 'focuschange', 'focusenter', 'focusleave', 'hide', 'highlightitem', 'itemadd', 'itemclick', 'itemcontextmenu', 'itemdblclick', 'itemkeydown', 'itemkeypress', 'itemkeyup', 'itemlongpress', 'itemmousedown', 'itemmouseenter', 'itemmouseleave', 'itemmouseup', 'itemremove', 'itemupdate', 'move', 'refresh', 'removed', 'render', 'resize', 'select', 'selectionchange', 'show', 'staterestore', 'statesave', 'unhighlightitem', 'viewready',], vc);
        this.xtype = 'timepicker';
    }
    ngOnInit() {
        this.baseOnInit();
    }
    ngAfterViewInit() {
        this.baseAfterViewInit();
    }
    ngOnChanges(changes) {
        this.baseOnChanges(changes);
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
};
ExtTimepickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtTimepickerComponent = ExtTimepickerComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ExtTimepicker',
        inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'blockRefresh', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'deferEmptyText', 'deferInitialRefresh', 'disabled', 'disabledCls', 'disableSelection', 'displayField', 'dock', 'draggable', 'emptyText', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'format', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'increment', 'itemCls', 'itemId', 'itemSelector', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'loadingCls', 'loadingHeight', 'loadingText', 'loadingUseMsg', 'loadMask', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxValue', 'maxWidth', 'minHeight', 'minValue', 'minWidth', 'modal', 'modelValidation', 'undefined', 'nameable', 'navigationModel', 'overCls', 'undefined', 'undefined', 'overItemCls', 'padding', 'pageSize', 'plugins', 'preserveScrollOnRefresh', 'preserveScrollOnReload', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectedItemCls', 'selection', 'selectionModel', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'singleSelect', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'tabIndex', 'throttledUpdate', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trackOver', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype',],
        outputs: ['ready', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforecontainerclick', 'beforecontainercontextmenu', 'beforecontainerdblclick', 'beforecontainerkeydown', 'beforecontainerkeypress', 'beforecontainerkeyup', 'beforecontainermousedown', 'beforecontainermouseout', 'beforecontainermouseover', 'beforecontainermouseup', 'beforedeactivate', 'beforedeselect', 'beforedestroy', 'beforehide', 'beforeitemclick', 'beforeitemcontextmenu', 'beforeitemdblclick', 'beforeitemkeydown', 'beforeitemkeypress', 'beforeitemkeyup', 'beforeitemlongpress', 'beforeitemmousedown', 'beforeitemmouseenter', 'beforeitemmouseleave', 'beforeitemmouseup', 'beforerefresh', 'beforerender', 'beforeselect', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'containerclick', 'containercontextmenu', 'containerdblclick', 'containerkeydown', 'containerkeypress', 'containerkeyup', 'containermousedown', 'containermouseout', 'containermouseover', 'containermouseup', 'deactivate', 'deselect', 'destroy', 'disable', 'enable', 'focus', 'focuschange', 'focusenter', 'focusleave', 'hide', 'highlightitem', 'itemadd', 'itemclick', 'itemcontextmenu', 'itemdblclick', 'itemkeydown', 'itemkeypress', 'itemkeyup', 'itemlongpress', 'itemmousedown', 'itemmouseenter', 'itemmouseleave', 'itemmouseup', 'itemremove', 'itemupdate', 'move', 'refresh', 'removed', 'render', 'resize', 'select', 'selectionchange', 'show', 'staterestore', 'statesave', 'unhighlightitem', 'viewready',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtTimepickerComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
], ExtTimepickerComponent);
export { ExtTimepickerComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCTimepicker()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0VGltZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbInNyYy9FeHRUaW1lcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQWtFO0FBQ2xFLDJDQUEyQztBQUMzQyxPQUFPLGFBQWEsTUFBTSxxRUFBcUUsQ0FBQztBQUNoRyxPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTeEMsSUFBYSxzQkFBc0IsOEJBQW5DLE1BQWEsc0JBQXVCLFNBQVEsT0FBTztJQUMvQyxZQUNJLElBQWdCLEVBQ2dCLGFBQXNCLEVBQ3RELEVBQW9CO1FBRXBCLEtBQUssQ0FDRCxJQUFJLEVBQ0osYUFBYSxFQUNiLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxlQUFlLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsY0FBYyxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxjQUFjLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGtCQUFrQixFQUFDLGFBQWEsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsc0JBQXNCLEVBQUMsZ0JBQWdCLEVBQUMscUJBQXFCLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxrQkFBa0IsRUFBQyxjQUFjLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLGNBQWMsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMseUJBQXlCLEVBQUMsd0JBQXdCLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsZUFBZSxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLFdB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QixJQUFJO0FBQ0oseUNBQXlDO0FBRXpDLGdEQUFnRDtBQUNoRCx5QkFBeUI7QUFDekIsMkNBQTJDO0FBQzNDLG9DQUFvQztBQUNwQyxJQUFJO0FBQ0osNENBQTRDO0FBQzVDLG1CQUFtQjtBQUNuQiwyQ0FBMkM7QUFDM0MsR0FBRztBQUNILGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IEVXQ1RpbWVwaWNrZXIgZnJvbSAnLi4vZGlzdC9leHQtdGltZXBpY2tlci5jb21wb25lbnQuanMnO1xuLy9pbnB1dHM6IChuZXcgRVdDVGltZXBpY2tlcigpKS5wcm9wZXJ0aWVzLFxuaW1wb3J0IEVXQ1RpbWVwaWNrZXIgZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYy9kaXN0L2V4dC10aW1lcGlja2VyLmNvbXBvbmVudC5qcyc7XG5pbXBvcnQge1xuICAgIEhvc3QsXG4gICAgT3B0aW9uYWwsXG4gICAgU2tpcFNlbGYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgZm9yd2FyZFJlZixcbiAgICBWaWV3Q29udGFpbmVyUmVmXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9hbmd1bGFyYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnRXh0VGltZXBpY2tlcicsXG4gICAgaW5wdXRzOiBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGl2ZUNvdW50ZXInLCdhbGlnbk9uU2Nyb2xsJywnYWxpZ25UYXJnZXQnLCdhbHdheXNPblRvcCcsJ2FuY2hvcicsJ2FuaW1hdGVTaGFkb3cnLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYXV0b0VsJywnYXV0b1JlbmRlcicsJ3VuZGVmaW5lZCcsJ2F1dG9TaG93JywnYmFzZUNscycsJ2JpbmQnLCdibG9ja1JlZnJlc2gnLCdib3JkZXInLCdjaGlsZEVscycsJ2NscycsJ2NvbHVtbldpZHRoJywnY29tcG9uZW50Q2xzJywnY29tcG9uZW50TGF5b3V0JywnY29uc3RyYWluJywnY29uc3RyYWludEluc2V0cycsJ2NvbnN0cmFpblRvJywnY29udGVudEVsJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0QWxpZ24nLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RlZmVyRW1wdHlUZXh0JywnZGVmZXJJbml0aWFsUmVmcmVzaCcsJ2Rpc2FibGVkJywnZGlzYWJsZWRDbHMnLCdkaXNhYmxlU2VsZWN0aW9uJywnZGlzcGxheUZpZWxkJywnZG9jaycsJ2RyYWdnYWJsZScsJ2VtcHR5VGV4dCcsJ2ZpeGVkJywnZmxleCcsJ2Zsb2F0aW5nJywnZm9jdXNDbHMnLCdmb2N1c09uVG9Gcm9udCcsJ2Zvcm1hdCcsJ2Zvcm1CaW5kJywnZnJhbWUnLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlTW9kZScsJ2h0bWwnLCdpZCcsJ2luY3JlbWVudCcsJ2l0ZW1DbHMnLCdpdGVtSWQnLCdpdGVtU2VsZWN0b3InLCdpdGVtVHBsJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xpcXVpZExheW91dCcsJ2xpc3RlbmVycycsJ2xpdmVEcmFnJywnbG9hZGVyJywnbG9hZGluZ0NscycsJ2xvYWRpbmdIZWlnaHQnLCdsb2FkaW5nVGV4dCcsJ2xvYWRpbmdVc2VNc2cnLCdsb2FkTWFzaycsJ21hcmdpbicsJ21hc2tEZWZhdWx0cycsJ21hc2tFbGVtZW50JywnbWF4SGVpZ2h0JywnbWF4VmFsdWUnLCdtYXhXaWR0aCcsJ21pbkhlaWdodCcsJ21pblZhbHVlJywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ3VuZGVmaW5lZCcsJ25hbWVhYmxlJywnbmF2aWdhdGlvbk1vZGVsJywnb3ZlckNscycsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ292ZXJJdGVtQ2xzJywncGFkZGluZycsJ3BhZ2VTaXplJywncGx1Z2lucycsJ3ByZXNlcnZlU2Nyb2xsT25SZWZyZXNoJywncHJlc2VydmVTY3JvbGxPblJlbG9hZCcsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlZ2lvbicsJ3JlbmRlckNvbmZpZycsJ3JlbmRlckRhdGEnLCd1bmRlZmluZWQnLCdyZW5kZXJUbycsJ3JlbmRlclRwbCcsJ3Jlc2l6YWJsZScsJ3Jlc2l6ZUhhbmRsZXMnLCdzYXZlRGVsYXknLCdzY3JvbGxhYmxlJywnc2VsZWN0ZWRJdGVtQ2xzJywnc2VsZWN0aW9uJywnc2VsZWN0aW9uTW9kZWwnLCdzZXNzaW9uJywnc2hhZG93Jywnc2hhZG93T2Zmc2V0Jywnc2hhcmVhYmxlTmFtZScsJ3NoaW0nLCdzaHJpbmtXcmFwJywndW5kZWZpbmVkJywnc2luZ2xlU2VsZWN0Jywnc3RhdGVFdmVudHMnLCdzdGF0ZWZ1bCcsJ3N0YXRlSWQnLCdzdG9yZScsJ3N0eWxlJywndGFiSW5kZXgnLCd0aHJvdHRsZWRVcGRhdGUnLCd0b0Zyb250T25TaG93JywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0cmFja092ZXInLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndWlDbHMnLCd1c2VyQ2xzJywndmlld01vZGVsJywnd2VpZ2h0Jywnd2lkdGgnLCd4dHlwZScsXSxcbiAgICBvdXRwdXRzOiBbJ3JlYWR5JywnYWN0aXZhdGUnLCdhZGRlZCcsJ2FmdGVybGF5b3V0YW5pbWF0aW9uJywnYWZ0ZXJyZW5kZXInLCdiZWZvcmVhY3RpdmF0ZScsJ2JlZm9yZWNvbnRhaW5lcmNsaWNrJywnYmVmb3JlY29udGFpbmVyY29udGV4dG1lbnUnLCdiZWZvcmVjb250YWluZXJkYmxjbGljaycsJ2JlZm9yZWNvbnRhaW5lcmtleWRvd24nLCdiZWZvcmVjb250YWluZXJrZXlwcmVzcycsJ2JlZm9yZWNvbnRhaW5lcmtleXVwJywnYmVmb3JlY29udGFpbmVybW91c2Vkb3duJywnYmVmb3JlY29udGFpbmVybW91c2VvdXQnLCdiZWZvcmVjb250YWluZXJtb3VzZW92ZXInLCdiZWZvcmVjb250YWluZXJtb3VzZXVwJywnYmVmb3JlZGVhY3RpdmF0ZScsJ2JlZm9yZWRlc2VsZWN0JywnYmVmb3JlZGVzdHJveScsJ2JlZm9yZWhpZGUnLCdiZWZvcmVpdGVtY2xpY2snLCdiZWZvcmVpdGVtY29udGV4dG1lbnUnLCdiZWZvcmVpdGVtZGJsY2xpY2snLCdiZWZvcmVpdGVta2V5ZG93bicsJ2JlZm9yZWl0ZW1rZXlwcmVzcycsJ2JlZm9yZWl0ZW1rZXl1cCcsJ2JlZm9yZWl0ZW1sb25ncHJlc3MnLCdiZWZvcmVpdGVtbW91c2Vkb3duJywnYmVmb3JlaXRlbW1vdXNlZW50ZXInLCdiZWZvcmVpdGVtbW91c2VsZWF2ZScsJ2JlZm9yZWl0ZW1tb3VzZXVwJywnYmVmb3JlcmVmcmVzaCcsJ2JlZm9yZXJlbmRlcicsJ2JlZm9yZXNlbGVjdCcsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdGF0ZXJlc3RvcmUnLCdiZWZvcmVzdGF0ZXNhdmUnLCdibHVyJywnYm94cmVhZHknLCdjb250YWluZXJjbGljaycsJ2NvbnRhaW5lcmNvbnRleHRtZW51JywnY29udGFpbmVyZGJsY2xpY2snLCdjb250YWluZXJrZXlkb3duJywnY29udGFpbmVya2V5cHJlc3MnLCdjb250YWluZXJrZXl1cCcsJ2NvbnRhaW5lcm1vdXNlZG93bicsJ2NvbnRhaW5lcm1vdXNlb3V0JywnY29udGFpbmVybW91c2VvdmVyJywnY29udGFpbmVybW91c2V1cCcsJ2RlYWN0aXZhdGUnLCdkZXNlbGVjdCcsJ2Rlc3Ryb3knLCdkaXNhYmxlJywnZW5hYmxlJywnZm9jdXMnLCdmb2N1c2NoYW5nZScsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGlkZScsJ2hpZ2hsaWdodGl0ZW0nLCdpdGVtYWRkJywnaXRlbWNsaWNrJywnaXRlbWNvbnRleHRtZW51JywnaXRlbWRibGNsaWNrJywnaXRlbWtleWRvd24nLCdpdGVta2V5cHJlc3MnLCdpdGVta2V5dXAnLCdpdGVtbG9uZ3ByZXNzJywnaXRlbW1vdXNlZG93bicsJ2l0ZW1tb3VzZWVudGVyJywnaXRlbW1vdXNlbGVhdmUnLCdpdGVtbW91c2V1cCcsJ2l0ZW1yZW1vdmUnLCdpdGVtdXBkYXRlJywnbW92ZScsJ3JlZnJlc2gnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywnc2VsZWN0Jywnc2VsZWN0aW9uY2hhbmdlJywnc2hvdycsJ3N0YXRlcmVzdG9yZScsJ3N0YXRlc2F2ZScsJ3VuaGlnaGxpZ2h0aXRlbScsJ3ZpZXdyZWFkeScsXSxcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0VGltZXBpY2tlckNvbXBvbmVudCl9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFRpbWVwaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aXZlQ291bnRlcicsJ2FsaWduT25TY3JvbGwnLCdhbGlnblRhcmdldCcsJ2Fsd2F5c09uVG9wJywnYW5jaG9yJywnYW5pbWF0ZVNoYWRvdycsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvRWwnLCdhdXRvUmVuZGVyJywndW5kZWZpbmVkJywnYXV0b1Nob3cnLCdiYXNlQ2xzJywnYmluZCcsJ2Jsb2NrUmVmcmVzaCcsJ2JvcmRlcicsJ2NoaWxkRWxzJywnY2xzJywnY29sdW1uV2lkdGgnLCdjb21wb25lbnRDbHMnLCdjb21wb25lbnRMYXlvdXQnLCdjb25zdHJhaW4nLCdjb25zdHJhaW50SW5zZXRzJywnY29uc3RyYWluVG8nLCdjb250ZW50RWwnLCdjb250cm9sbGVyJywnZGF0YScsJ2RlZmF1bHRBbGlnbicsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGVmZXJFbXB0eVRleHQnLCdkZWZlckluaXRpYWxSZWZyZXNoJywnZGlzYWJsZWQnLCdkaXNhYmxlZENscycsJ2Rpc2FibGVTZWxlY3Rpb24nLCdkaXNwbGF5RmllbGQnLCdkb2NrJywnZHJhZ2dhYmxlJywnZW1wdHlUZXh0JywnZml4ZWQnLCdmbGV4JywnZmxvYXRpbmcnLCdmb2N1c0NscycsJ2ZvY3VzT25Ub0Zyb250JywnZm9ybWF0JywnZm9ybUJpbmQnLCdmcmFtZScsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVNb2RlJywnaHRtbCcsJ2lkJywnaW5jcmVtZW50JywnaXRlbUNscycsJ2l0ZW1JZCcsJ2l0ZW1TZWxlY3RvcicsJ2l0ZW1UcGwnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGlxdWlkTGF5b3V0JywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdsb2FkaW5nQ2xzJywnbG9hZGluZ0hlaWdodCcsJ2xvYWRpbmdUZXh0JywnbG9hZGluZ1VzZU1zZycsJ2xvYWRNYXNrJywnbWFyZ2luJywnbWFza0RlZmF1bHRzJywnbWFza0VsZW1lbnQnLCdtYXhIZWlnaHQnLCdtYXhWYWx1ZScsJ21heFdpZHRoJywnbWluSGVpZ2h0JywnbWluVmFsdWUnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywndW5kZWZpbmVkJywnbmFtZWFibGUnLCduYXZpZ2F0aW9uTW9kZWwnLCdvdmVyQ2xzJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywnb3Zlckl0ZW1DbHMnLCdwYWRkaW5nJywncGFnZVNpemUnLCdwbHVnaW5zJywncHJlc2VydmVTY3JvbGxPblJlZnJlc2gnLCdwcmVzZXJ2ZVNjcm9sbE9uUmVsb2FkJywncHVibGlzaGVzJywncmVmZXJlbmNlJywncmVnaW9uJywncmVuZGVyQ29uZmlnJywncmVuZGVyRGF0YScsJ3VuZGVmaW5lZCcsJ3JlbmRlclRvJywncmVuZGVyVHBsJywncmVzaXphYmxlJywncmVzaXplSGFuZGxlcycsJ3NhdmVEZWxheScsJ3Njcm9sbGFibGUnLCdzZWxlY3RlZEl0ZW1DbHMnLCdzZWxlY3Rpb24nLCdzZWxlY3Rpb25Nb2RlbCcsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFkb3dPZmZzZXQnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nocmlua1dyYXAnLCd1bmRlZmluZWQnLCdzaW5nbGVTZWxlY3QnLCdzdGF0ZUV2ZW50cycsJ3N0YXRlZnVsJywnc3RhdGVJZCcsJ3N0b3JlJywnc3R5bGUnLCd0YWJJbmRleCcsJ3Rocm90dGxlZFVwZGF0ZScsJ3RvRnJvbnRPblNob3cnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYWNrT3ZlcicsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1aUNscycsJ3VzZXJDbHMnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NUaW1lcGlja2VyKCkpLmV2ZW50cyxcbiAgICAgICAgICAgIFsncmVhZHknLCdhY3RpdmF0ZScsJ2FkZGVkJywnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLCdhZnRlcnJlbmRlcicsJ2JlZm9yZWFjdGl2YXRlJywnYmVmb3JlY29udGFpbmVyY2xpY2snLCdiZWZvcmVjb250YWluZXJjb250ZXh0bWVudScsJ2JlZm9yZWNvbnRhaW5lcmRibGNsaWNrJywnYmVmb3JlY29udGFpbmVya2V5ZG93bicsJ2JlZm9yZWNvbnRhaW5lcmtleXByZXNzJywnYmVmb3JlY29udGFpbmVya2V5dXAnLCdiZWZvcmVjb250YWluZXJtb3VzZWRvd24nLCdiZWZvcmVjb250YWluZXJtb3VzZW91dCcsJ2JlZm9yZWNvbnRhaW5lcm1vdXNlb3ZlcicsJ2JlZm9yZWNvbnRhaW5lcm1vdXNldXAnLCdiZWZvcmVkZWFjdGl2YXRlJywnYmVmb3JlZGVzZWxlY3QnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlaGlkZScsJ2JlZm9yZWl0ZW1jbGljaycsJ2JlZm9yZWl0ZW1jb250ZXh0bWVudScsJ2JlZm9yZWl0ZW1kYmxjbGljaycsJ2JlZm9yZWl0ZW1rZXlkb3duJywnYmVmb3JlaXRlbWtleXByZXNzJywnYmVmb3JlaXRlbWtleXVwJywnYmVmb3JlaXRlbWxvbmdwcmVzcycsJ2JlZm9yZWl0ZW1tb3VzZWRvd24nLCdiZWZvcmVpdGVtbW91c2VlbnRlcicsJ2JlZm9yZWl0ZW1tb3VzZWxlYXZlJywnYmVmb3JlaXRlbW1vdXNldXAnLCdiZWZvcmVyZWZyZXNoJywnYmVmb3JlcmVuZGVyJywnYmVmb3Jlc2VsZWN0JywnYmVmb3Jlc2hvdycsJ2JlZm9yZXN0YXRlcmVzdG9yZScsJ2JlZm9yZXN0YXRlc2F2ZScsJ2JsdXInLCdib3hyZWFkeScsJ2NvbnRhaW5lcmNsaWNrJywnY29udGFpbmVyY29udGV4dG1lbnUnLCdjb250YWluZXJkYmxjbGljaycsJ2NvbnRhaW5lcmtleWRvd24nLCdjb250YWluZXJrZXlwcmVzcycsJ2NvbnRhaW5lcmtleXVwJywnY29udGFpbmVybW91c2Vkb3duJywnY29udGFpbmVybW91c2VvdXQnLCdjb250YWluZXJtb3VzZW92ZXInLCdjb250YWluZXJtb3VzZXVwJywnZGVhY3RpdmF0ZScsJ2Rlc2VsZWN0JywnZGVzdHJveScsJ2Rpc2FibGUnLCdlbmFibGUnLCdmb2N1cycsJ2ZvY3VzY2hhbmdlJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdoaWRlJywnaGlnaGxpZ2h0aXRlbScsJ2l0ZW1hZGQnLCdpdGVtY2xpY2snLCdpdGVtY29udGV4dG1lbnUnLCdpdGVtZGJsY2xpY2snLCdpdGVta2V5ZG93bicsJ2l0ZW1rZXlwcmVzcycsJ2l0ZW1rZXl1cCcsJ2l0ZW1sb25ncHJlc3MnLCdpdGVtbW91c2Vkb3duJywnaXRlbW1vdXNlZW50ZXInLCdpdGVtbW91c2VsZWF2ZScsJ2l0ZW1tb3VzZXVwJywnaXRlbXJlbW92ZScsJ2l0ZW11cGRhdGUnLCdtb3ZlJywncmVmcmVzaCcsJ3JlbW92ZWQnLCdyZW5kZXInLCdyZXNpemUnLCdzZWxlY3QnLCdzZWxlY3Rpb25jaGFuZ2UnLCdzaG93Jywnc3RhdGVyZXN0b3JlJywnc3RhdGVzYXZlJywndW5oaWdobGlnaHRpdGVtJywndmlld3JlYWR5JyxdLFxuICAgICAgICAgICAgdmNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3RpbWVwaWNrZXInXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ1RpbWVwaWNrZXIoKSkuZXZlbnRuYW1lcztcbi8vdmFyIGV2ZW50bmFtZXNhbGwgPSBbXTtcbi8vZXZlbnRzLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbi8vICAgIGV2ZW50bmFtZXNhbGwucHVzaChldmVudC5uYW1lKVxuLy99KVxuLy9jb25zdCBkaXN0aW5jdCA9ICh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHtcbi8vICAgIC8vcmV0dXJuIHRydWVcbi8vICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbi8vfVxuLy92YXIgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXNhbGwuZmlsdGVyKGRpc3RpbmN0KTtcbiJdfQ==