var ExtDataviewComponent_1;
import * as tslib_1 from "tslib";
//import EWCDataview from '../dist/ext-dataview.component.js';
//inputs: (new EWCDataview()).properties,
import EWCDataview from '@sencha/ext-web-components-classic/dist/ext-dataview.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
let ExtDataviewComponent = ExtDataviewComponent_1 = class ExtDataviewComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'blockRefresh', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'deferEmptyText', 'deferInitialRefresh', 'disabled', 'disabledCls', 'disableSelection', 'dock', 'draggable', 'emptyText', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'itemCls', 'itemId', 'itemSelector', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'loadingCls', 'loadingHeight', 'loadingText', 'loadingUseMsg', 'loadMask', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'undefined', 'nameable', 'navigationModel', 'overCls', 'undefined', 'undefined', 'overItemCls', 'padding', 'plugins', 'preserveScrollOnRefresh', 'preserveScrollOnReload', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectedItemCls', 'selection', 'selectionModel', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'singleSelect', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'tabIndex', 'throttledUpdate', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trackOver', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype',], (new EWCDataview()).events, ['ready', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforecontainerclick', 'beforecontainercontextmenu', 'beforecontainerdblclick', 'beforecontainerkeydown', 'beforecontainerkeypress', 'beforecontainerkeyup', 'beforecontainermousedown', 'beforecontainermouseout', 'beforecontainermouseover', 'beforecontainermouseup', 'beforedeactivate', 'beforedeselect', 'beforedestroy', 'beforehide', 'beforeitemclick', 'beforeitemcontextmenu', 'beforeitemdblclick', 'beforeitemkeydown', 'beforeitemkeypress', 'beforeitemkeyup', 'beforeitemlongpress', 'beforeitemmousedown', 'beforeitemmouseenter', 'beforeitemmouseleave', 'beforeitemmouseup', 'beforerefresh', 'beforerender', 'beforeselect', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'containerclick', 'containercontextmenu', 'containerdblclick', 'containerkeydown', 'containerkeypress', 'containerkeyup', 'containermousedown', 'containermouseout', 'containermouseover', 'containermouseup', 'deactivate', 'deselect', 'destroy', 'disable', 'enable', 'focus', 'focuschange', 'focusenter', 'focusleave', 'hide', 'highlightitem', 'itemadd', 'itemclick', 'itemcontextmenu', 'itemdblclick', 'itemkeydown', 'itemkeypress', 'itemkeyup', 'itemlongpress', 'itemmousedown', 'itemmouseenter', 'itemmouseleave', 'itemmouseup', 'itemremove', 'itemupdate', 'move', 'refresh', 'removed', 'render', 'resize', 'select', 'selectionchange', 'show', 'staterestore', 'statesave', 'unhighlightitem', 'viewready',], vc);
        this.xtype = 'dataview';
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
ExtDataviewComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtDataviewComponent = ExtDataviewComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ExtDataview',
        inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'blockRefresh', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'deferEmptyText', 'deferInitialRefresh', 'disabled', 'disabledCls', 'disableSelection', 'dock', 'draggable', 'emptyText', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'itemCls', 'itemId', 'itemSelector', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'loadingCls', 'loadingHeight', 'loadingText', 'loadingUseMsg', 'loadMask', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'undefined', 'nameable', 'navigationModel', 'overCls', 'undefined', 'undefined', 'overItemCls', 'padding', 'plugins', 'preserveScrollOnRefresh', 'preserveScrollOnReload', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectedItemCls', 'selection', 'selectionModel', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'singleSelect', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'tabIndex', 'throttledUpdate', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trackOver', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype',],
        outputs: ['ready', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforecontainerclick', 'beforecontainercontextmenu', 'beforecontainerdblclick', 'beforecontainerkeydown', 'beforecontainerkeypress', 'beforecontainerkeyup', 'beforecontainermousedown', 'beforecontainermouseout', 'beforecontainermouseover', 'beforecontainermouseup', 'beforedeactivate', 'beforedeselect', 'beforedestroy', 'beforehide', 'beforeitemclick', 'beforeitemcontextmenu', 'beforeitemdblclick', 'beforeitemkeydown', 'beforeitemkeypress', 'beforeitemkeyup', 'beforeitemlongpress', 'beforeitemmousedown', 'beforeitemmouseenter', 'beforeitemmouseleave', 'beforeitemmouseup', 'beforerefresh', 'beforerender', 'beforeselect', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'containerclick', 'containercontextmenu', 'containerdblclick', 'containerkeydown', 'containerkeypress', 'containerkeyup', 'containermousedown', 'containermouseout', 'containermouseover', 'containermouseup', 'deactivate', 'deselect', 'destroy', 'disable', 'enable', 'focus', 'focuschange', 'focusenter', 'focusleave', 'hide', 'highlightitem', 'itemadd', 'itemclick', 'itemcontextmenu', 'itemdblclick', 'itemkeydown', 'itemkeypress', 'itemkeyup', 'itemlongpress', 'itemmousedown', 'itemmouseenter', 'itemmouseleave', 'itemmouseup', 'itemremove', 'itemupdate', 'move', 'refresh', 'removed', 'render', 'resize', 'select', 'selectionchange', 'show', 'staterestore', 'statesave', 'unhighlightitem', 'viewready',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtDataviewComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
], ExtDataviewComponent);
export { ExtDataviewComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCDataview()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0RGF0YXZpZXcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWNsYXNzaWMvIiwic291cmNlcyI6WyJzcmMvRXh0RGF0YXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4REFBOEQ7QUFDOUQseUNBQXlDO0FBQ3pDLE9BQU8sV0FBVyxNQUFNLG1FQUFtRSxDQUFDO0FBQzVGLE9BQU8sRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN4QyxJQUFhLG9CQUFvQiw0QkFBakMsTUFBYSxvQkFBcUIsU0FBUSxPQUFPO0lBQzdDLFlBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFFcEIsS0FBSyxDQUNELElBQUksRUFDSixhQUFhLEVBQ2IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsa0JBQWtCLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFB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QyxHQUFHO0FBQ0gsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgRVdDRGF0YXZpZXcgZnJvbSAnLi4vZGlzdC9leHQtZGF0YXZpZXcuY29tcG9uZW50LmpzJztcbi8vaW5wdXRzOiAobmV3IEVXQ0RhdGF2aWV3KCkpLnByb3BlcnRpZXMsXG5pbXBvcnQgRVdDRGF0YXZpZXcgZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYy9kaXN0L2V4dC1kYXRhdmlldy5jb21wb25lbnQuanMnO1xuaW1wb3J0IHtcbiAgICBIb3N0LFxuICAgIE9wdGlvbmFsLFxuICAgIFNraXBTZWxmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWYsXG4gICAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vYW5ndWxhcmJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ0V4dERhdGF2aWV3JyxcbiAgICBpbnB1dHM6IFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aXZlQ291bnRlcicsJ2FsaWduT25TY3JvbGwnLCdhbGlnblRhcmdldCcsJ2Fsd2F5c09uVG9wJywnYW5jaG9yJywnYW5pbWF0ZVNoYWRvdycsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvRWwnLCdhdXRvUmVuZGVyJywndW5kZWZpbmVkJywnYXV0b1Nob3cnLCdiYXNlQ2xzJywnYmluZCcsJ2Jsb2NrUmVmcmVzaCcsJ2JvcmRlcicsJ2NoaWxkRWxzJywnY2xzJywnY29sdW1uV2lkdGgnLCdjb21wb25lbnRDbHMnLCdjb21wb25lbnRMYXlvdXQnLCdjb25zdHJhaW4nLCdjb25zdHJhaW50SW5zZXRzJywnY29uc3RyYWluVG8nLCdjb250ZW50RWwnLCdjb250cm9sbGVyJywnZGF0YScsJ2RlZmF1bHRBbGlnbicsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGVmZXJFbXB0eVRleHQnLCdkZWZlckluaXRpYWxSZWZyZXNoJywnZGlzYWJsZWQnLCdkaXNhYmxlZENscycsJ2Rpc2FibGVTZWxlY3Rpb24nLCdkb2NrJywnZHJhZ2dhYmxlJywnZW1wdHlUZXh0JywnZml4ZWQnLCdmbGV4JywnZmxvYXRpbmcnLCdmb2N1c0NscycsJ2ZvY3VzT25Ub0Zyb250JywnZm9ybUJpbmQnLCdmcmFtZScsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVNb2RlJywnaHRtbCcsJ2lkJywnaXRlbUNscycsJ2l0ZW1JZCcsJ2l0ZW1TZWxlY3RvcicsJ2l0ZW1UcGwnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGlxdWlkTGF5b3V0JywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdsb2FkaW5nQ2xzJywnbG9hZGluZ0hlaWdodCcsJ2xvYWRpbmdUZXh0JywnbG9hZGluZ1VzZU1zZycsJ2xvYWRNYXNrJywnbWFyZ2luJywnbWFza0RlZmF1bHRzJywnbWFza0VsZW1lbnQnLCdtYXhIZWlnaHQnLCdtYXhXaWR0aCcsJ21pbkhlaWdodCcsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCd1bmRlZmluZWQnLCduYW1lYWJsZScsJ25hdmlnYXRpb25Nb2RlbCcsJ292ZXJDbHMnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdvdmVySXRlbUNscycsJ3BhZGRpbmcnLCdwbHVnaW5zJywncHJlc2VydmVTY3JvbGxPblJlZnJlc2gnLCdwcmVzZXJ2ZVNjcm9sbE9uUmVsb2FkJywncHVibGlzaGVzJywncmVmZXJlbmNlJywncmVnaW9uJywncmVuZGVyQ29uZmlnJywncmVuZGVyRGF0YScsJ3VuZGVmaW5lZCcsJ3JlbmRlclRvJywncmVuZGVyVHBsJywncmVzaXphYmxlJywncmVzaXplSGFuZGxlcycsJ3NhdmVEZWxheScsJ3Njcm9sbGFibGUnLCdzZWxlY3RlZEl0ZW1DbHMnLCdzZWxlY3Rpb24nLCdzZWxlY3Rpb25Nb2RlbCcsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFkb3dPZmZzZXQnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nocmlua1dyYXAnLCd1bmRlZmluZWQnLCdzaW5nbGVTZWxlY3QnLCdzdGF0ZUV2ZW50cycsJ3N0YXRlZnVsJywnc3RhdGVJZCcsJ3N0b3JlJywnc3R5bGUnLCd0YWJJbmRleCcsJ3Rocm90dGxlZFVwZGF0ZScsJ3RvRnJvbnRPblNob3cnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYWNrT3ZlcicsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1aUNscycsJ3VzZXJDbHMnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdhY3RpdmF0ZScsJ2FkZGVkJywnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLCdhZnRlcnJlbmRlcicsJ2JlZm9yZWFjdGl2YXRlJywnYmVmb3JlY29udGFpbmVyY2xpY2snLCdiZWZvcmVjb250YWluZXJjb250ZXh0bWVudScsJ2JlZm9yZWNvbnRhaW5lcmRibGNsaWNrJywnYmVmb3JlY29udGFpbmVya2V5ZG93bicsJ2JlZm9yZWNvbnRhaW5lcmtleXByZXNzJywnYmVmb3JlY29udGFpbmVya2V5dXAnLCdiZWZvcmVjb250YWluZXJtb3VzZWRvd24nLCdiZWZvcmVjb250YWluZXJtb3VzZW91dCcsJ2JlZm9yZWNvbnRhaW5lcm1vdXNlb3ZlcicsJ2JlZm9yZWNvbnRhaW5lcm1vdXNldXAnLCdiZWZvcmVkZWFjdGl2YXRlJywnYmVmb3JlZGVzZWxlY3QnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlaGlkZScsJ2JlZm9yZWl0ZW1jbGljaycsJ2JlZm9yZWl0ZW1jb250ZXh0bWVudScsJ2JlZm9yZWl0ZW1kYmxjbGljaycsJ2JlZm9yZWl0ZW1rZXlkb3duJywnYmVmb3JlaXRlbWtleXByZXNzJywnYmVmb3JlaXRlbWtleXVwJywnYmVmb3JlaXRlbWxvbmdwcmVzcycsJ2JlZm9yZWl0ZW1tb3VzZWRvd24nLCdiZWZvcmVpdGVtbW91c2VlbnRlcicsJ2JlZm9yZWl0ZW1tb3VzZWxlYXZlJywnYmVmb3JlaXRlbW1vdXNldXAnLCdiZWZvcmVyZWZyZXNoJywnYmVmb3JlcmVuZGVyJywnYmVmb3Jlc2VsZWN0JywnYmVmb3Jlc2hvdycsJ2JlZm9yZXN0YXRlcmVzdG9yZScsJ2JlZm9yZXN0YXRlc2F2ZScsJ2JsdXInLCdib3hyZWFkeScsJ2NvbnRhaW5lcmNsaWNrJywnY29udGFpbmVyY29udGV4dG1lbnUnLCdjb250YWluZXJkYmxjbGljaycsJ2NvbnRhaW5lcmtleWRvd24nLCdjb250YWluZXJrZXlwcmVzcycsJ2NvbnRhaW5lcmtleXVwJywnY29udGFpbmVybW91c2Vkb3duJywnY29udGFpbmVybW91c2VvdXQnLCdjb250YWluZXJtb3VzZW92ZXInLCdjb250YWluZXJtb3VzZXVwJywnZGVhY3RpdmF0ZScsJ2Rlc2VsZWN0JywnZGVzdHJveScsJ2Rpc2FibGUnLCdlbmFibGUnLCdmb2N1cycsJ2ZvY3VzY2hhbmdlJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdoaWRlJywnaGlnaGxpZ2h0aXRlbScsJ2l0ZW1hZGQnLCdpdGVtY2xpY2snLCdpdGVtY29udGV4dG1lbnUnLCdpdGVtZGJsY2xpY2snLCdpdGVta2V5ZG93bicsJ2l0ZW1rZXlwcmVzcycsJ2l0ZW1rZXl1cCcsJ2l0ZW1sb25ncHJlc3MnLCdpdGVtbW91c2Vkb3duJywnaXRlbW1vdXNlZW50ZXInLCdpdGVtbW91c2VsZWF2ZScsJ2l0ZW1tb3VzZXVwJywnaXRlbXJlbW92ZScsJ2l0ZW11cGRhdGUnLCdtb3ZlJywncmVmcmVzaCcsJ3JlbW92ZWQnLCdyZW5kZXInLCdyZXNpemUnLCdzZWxlY3QnLCdzZWxlY3Rpb25jaGFuZ2UnLCdzaG93Jywnc3RhdGVyZXN0b3JlJywnc3RhdGVzYXZlJywndW5oaWdobGlnaHRpdGVtJywndmlld3JlYWR5JyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHREYXRhdmlld0NvbXBvbmVudCl9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dERhdGF2aWV3Q29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZSxcbiAgICAgICAgdmM6IFZpZXdDb250YWluZXJSZWZcbiAgICAgICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGl2ZUNvdW50ZXInLCdhbGlnbk9uU2Nyb2xsJywnYWxpZ25UYXJnZXQnLCdhbHdheXNPblRvcCcsJ2FuY2hvcicsJ2FuaW1hdGVTaGFkb3cnLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYXV0b0VsJywnYXV0b1JlbmRlcicsJ3VuZGVmaW5lZCcsJ2F1dG9TaG93JywnYmFzZUNscycsJ2JpbmQnLCdibG9ja1JlZnJlc2gnLCdib3JkZXInLCdjaGlsZEVscycsJ2NscycsJ2NvbHVtbldpZHRoJywnY29tcG9uZW50Q2xzJywnY29tcG9uZW50TGF5b3V0JywnY29uc3RyYWluJywnY29uc3RyYWludEluc2V0cycsJ2NvbnN0cmFpblRvJywnY29udGVudEVsJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0QWxpZ24nLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RlZmVyRW1wdHlUZXh0JywnZGVmZXJJbml0aWFsUmVmcmVzaCcsJ2Rpc2FibGVkJywnZGlzYWJsZWRDbHMnLCdkaXNhYmxlU2VsZWN0aW9uJywnZG9jaycsJ2RyYWdnYWJsZScsJ2VtcHR5VGV4dCcsJ2ZpeGVkJywnZmxleCcsJ2Zsb2F0aW5nJywnZm9jdXNDbHMnLCdmb2N1c09uVG9Gcm9udCcsJ2Zvcm1CaW5kJywnZnJhbWUnLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlTW9kZScsJ2h0bWwnLCdpZCcsJ2l0ZW1DbHMnLCdpdGVtSWQnLCdpdGVtU2VsZWN0b3InLCdpdGVtVHBsJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xpcXVpZExheW91dCcsJ2xpc3RlbmVycycsJ2xpdmVEcmFnJywnbG9hZGVyJywnbG9hZGluZ0NscycsJ2xvYWRpbmdIZWlnaHQnLCdsb2FkaW5nVGV4dCcsJ2xvYWRpbmdVc2VNc2cnLCdsb2FkTWFzaycsJ21hcmdpbicsJ21hc2tEZWZhdWx0cycsJ21hc2tFbGVtZW50JywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywndW5kZWZpbmVkJywnbmFtZWFibGUnLCduYXZpZ2F0aW9uTW9kZWwnLCdvdmVyQ2xzJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywnb3Zlckl0ZW1DbHMnLCdwYWRkaW5nJywncGx1Z2lucycsJ3ByZXNlcnZlU2Nyb2xsT25SZWZyZXNoJywncHJlc2VydmVTY3JvbGxPblJlbG9hZCcsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlZ2lvbicsJ3JlbmRlckNvbmZpZycsJ3JlbmRlckRhdGEnLCd1bmRlZmluZWQnLCdyZW5kZXJUbycsJ3JlbmRlclRwbCcsJ3Jlc2l6YWJsZScsJ3Jlc2l6ZUhhbmRsZXMnLCdzYXZlRGVsYXknLCdzY3JvbGxhYmxlJywnc2VsZWN0ZWRJdGVtQ2xzJywnc2VsZWN0aW9uJywnc2VsZWN0aW9uTW9kZWwnLCdzZXNzaW9uJywnc2hhZG93Jywnc2hhZG93T2Zmc2V0Jywnc2hhcmVhYmxlTmFtZScsJ3NoaW0nLCdzaHJpbmtXcmFwJywndW5kZWZpbmVkJywnc2luZ2xlU2VsZWN0Jywnc3RhdGVFdmVudHMnLCdzdGF0ZWZ1bCcsJ3N0YXRlSWQnLCdzdG9yZScsJ3N0eWxlJywndGFiSW5kZXgnLCd0aHJvdHRsZWRVcGRhdGUnLCd0b0Zyb250T25TaG93JywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0cmFja092ZXInLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndWlDbHMnLCd1c2VyQ2xzJywndmlld01vZGVsJywnd2VpZ2h0Jywnd2lkdGgnLCd4dHlwZScsXSxcbiAgICAgICAgICAgIChuZXcgRVdDRGF0YXZpZXcoKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2FjdGl2YXRlJywnYWRkZWQnLCdhZnRlcmxheW91dGFuaW1hdGlvbicsJ2FmdGVycmVuZGVyJywnYmVmb3JlYWN0aXZhdGUnLCdiZWZvcmVjb250YWluZXJjbGljaycsJ2JlZm9yZWNvbnRhaW5lcmNvbnRleHRtZW51JywnYmVmb3JlY29udGFpbmVyZGJsY2xpY2snLCdiZWZvcmVjb250YWluZXJrZXlkb3duJywnYmVmb3JlY29udGFpbmVya2V5cHJlc3MnLCdiZWZvcmVjb250YWluZXJrZXl1cCcsJ2JlZm9yZWNvbnRhaW5lcm1vdXNlZG93bicsJ2JlZm9yZWNvbnRhaW5lcm1vdXNlb3V0JywnYmVmb3JlY29udGFpbmVybW91c2VvdmVyJywnYmVmb3JlY29udGFpbmVybW91c2V1cCcsJ2JlZm9yZWRlYWN0aXZhdGUnLCdiZWZvcmVkZXNlbGVjdCcsJ2JlZm9yZWRlc3Ryb3knLCdiZWZvcmVoaWRlJywnYmVmb3JlaXRlbWNsaWNrJywnYmVmb3JlaXRlbWNvbnRleHRtZW51JywnYmVmb3JlaXRlbWRibGNsaWNrJywnYmVmb3JlaXRlbWtleWRvd24nLCdiZWZvcmVpdGVta2V5cHJlc3MnLCdiZWZvcmVpdGVta2V5dXAnLCdiZWZvcmVpdGVtbG9uZ3ByZXNzJywnYmVmb3JlaXRlbW1vdXNlZG93bicsJ2JlZm9yZWl0ZW1tb3VzZWVudGVyJywnYmVmb3JlaXRlbW1vdXNlbGVhdmUnLCdiZWZvcmVpdGVtbW91c2V1cCcsJ2JlZm9yZXJlZnJlc2gnLCdiZWZvcmVyZW5kZXInLCdiZWZvcmVzZWxlY3QnLCdiZWZvcmVzaG93JywnYmVmb3Jlc3RhdGVyZXN0b3JlJywnYmVmb3Jlc3RhdGVzYXZlJywnYmx1cicsJ2JveHJlYWR5JywnY29udGFpbmVyY2xpY2snLCdjb250YWluZXJjb250ZXh0bWVudScsJ2NvbnRhaW5lcmRibGNsaWNrJywnY29udGFpbmVya2V5ZG93bicsJ2NvbnRhaW5lcmtleXByZXNzJywnY29udGFpbmVya2V5dXAnLCdjb250YWluZXJtb3VzZWRvd24nLCdjb250YWluZXJtb3VzZW91dCcsJ2NvbnRhaW5lcm1vdXNlb3ZlcicsJ2NvbnRhaW5lcm1vdXNldXAnLCdkZWFjdGl2YXRlJywnZGVzZWxlY3QnLCdkZXN0cm95JywnZGlzYWJsZScsJ2VuYWJsZScsJ2ZvY3VzJywnZm9jdXNjaGFuZ2UnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2hpZGUnLCdoaWdobGlnaHRpdGVtJywnaXRlbWFkZCcsJ2l0ZW1jbGljaycsJ2l0ZW1jb250ZXh0bWVudScsJ2l0ZW1kYmxjbGljaycsJ2l0ZW1rZXlkb3duJywnaXRlbWtleXByZXNzJywnaXRlbWtleXVwJywnaXRlbWxvbmdwcmVzcycsJ2l0ZW1tb3VzZWRvd24nLCdpdGVtbW91c2VlbnRlcicsJ2l0ZW1tb3VzZWxlYXZlJywnaXRlbW1vdXNldXAnLCdpdGVtcmVtb3ZlJywnaXRlbXVwZGF0ZScsJ21vdmUnLCdyZWZyZXNoJywncmVtb3ZlZCcsJ3JlbmRlcicsJ3Jlc2l6ZScsJ3NlbGVjdCcsJ3NlbGVjdGlvbmNoYW5nZScsJ3Nob3cnLCdzdGF0ZXJlc3RvcmUnLCdzdGF0ZXNhdmUnLCd1bmhpZ2hsaWdodGl0ZW0nLCd2aWV3cmVhZHknLF0sXG4gICAgICAgICAgICB2Y1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnZGF0YXZpZXcnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ0RhdGF2aWV3KCkpLmV2ZW50bmFtZXM7XG4vL3ZhciBldmVudG5hbWVzYWxsID0gW107XG4vL2V2ZW50cy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4vLyAgICBldmVudG5hbWVzYWxsLnB1c2goZXZlbnQubmFtZSlcbi8vfSlcbi8vY29uc3QgZGlzdGluY3QgPSAodmFsdWUsIGluZGV4LCBzZWxmKSA9PiB7XG4vLyAgICAvL3JldHVybiB0cnVlXG4vLyAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4vL31cbi8vdmFyIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzYWxsLmZpbHRlcihkaXN0aW5jdCk7XG4iXX0=