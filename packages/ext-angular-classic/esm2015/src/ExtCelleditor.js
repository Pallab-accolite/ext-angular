var ExtCelleditorComponent_1;
import { __decorate, __param } from "tslib";
//import EWCCelleditor from '../dist/ext-celleditor.component.js';
//inputs: (new EWCCelleditor()).properties,
//import EWCCelleditor from '@sencha/ext-web-components-classic/dist/ext-celleditor.component.js';
import { EWCCelleditor } from '@sencha/ext-web-components-classic';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
let ExtCelleditorComponent = ExtCelleditorComponent_1 = class ExtCelleditorComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignment', 'alignOnScroll', 'alignTarget', 'allowBlur', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'autoSize', 'baseCls', 'bind', 'border', 'bubbleEvents', 'cancelOnEsc', 'childEls', 'cls', 'columnWidth', 'completeOnEnter', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'draggable', 'field', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideEl', 'hideMode', 'html', 'id', 'ignoreNoChange', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'offsets', 'overCls', 'undefined', 'undefined', 'padding', 'parentEl', 'plugins', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'revertInvalid', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'suspendLayout', 'swallowKeys', 'tabGuard', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'updateEl', 'userCls', 'value', 'viewModel', 'weight', 'width', 'xtype',], (new EWCCelleditor()).events, ['ready', 'activate', 'add', 'added', 'afterlayout', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforeadd', 'beforecomplete', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforeremove', 'beforerender', 'beforeshow', 'beforestartedit', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'canceledit', 'childmove', 'complete', 'deactivate', 'destroy', 'disable', 'enable', 'focus', 'focusenter', 'focusleave', 'hide', 'move', 'remove', 'removed', 'render', 'resize', 'show', 'specialkey', 'startedit', 'staterestore', 'statesave',], vc);
        this.xtype = 'celleditor';
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
ExtCelleditorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtCelleditorComponent = ExtCelleditorComponent_1 = __decorate([
    Component({
        selector: 'ExtCelleditor',
        inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignment', 'alignOnScroll', 'alignTarget', 'allowBlur', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'autoSize', 'baseCls', 'bind', 'border', 'bubbleEvents', 'cancelOnEsc', 'childEls', 'cls', 'columnWidth', 'completeOnEnter', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'draggable', 'field', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideEl', 'hideMode', 'html', 'id', 'ignoreNoChange', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'offsets', 'overCls', 'undefined', 'undefined', 'padding', 'parentEl', 'plugins', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'revertInvalid', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'suspendLayout', 'swallowKeys', 'tabGuard', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'updateEl', 'userCls', 'value', 'viewModel', 'weight', 'width', 'xtype',],
        outputs: ['ready', 'activate', 'add', 'added', 'afterlayout', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforeadd', 'beforecomplete', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforeremove', 'beforerender', 'beforeshow', 'beforestartedit', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'canceledit', 'childmove', 'complete', 'deactivate', 'destroy', 'disable', 'enable', 'focus', 'focusenter', 'focusleave', 'hide', 'move', 'remove', 'removed', 'render', 'resize', 'show', 'specialkey', 'startedit', 'staterestore', 'statesave',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtCelleditorComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
], ExtCelleditorComponent);
export { ExtCelleditorComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCCelleditor()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0Q2VsbGVkaXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbInNyYy9FeHRDZWxsZWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQWtFO0FBQ2xFLDJDQUEyQztBQUMzQyxrR0FBa0c7QUFDbEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25FLE9BQU8sRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN4QyxJQUFhLHNCQUFzQiw4QkFBbkMsTUFBYSxzQkFBdUIsU0FBUSxPQUFPO0lBQy9DLFlBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFFcEIsS0FBSyxDQUNELElBQUksRUFDSixhQUFhLEVBQ2IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLFNBQVMsRUFBQyxxQkFBcUIsRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQywrQkFBK0IsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxN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QzNDLG9DQUFvQztBQUNwQyxJQUFJO0FBQ0osNENBQTRDO0FBQzVDLG1CQUFtQjtBQUNuQiwyQ0FBMkM7QUFDM0MsR0FBRztBQUNILGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IEVXQ0NlbGxlZGl0b3IgZnJvbSAnLi4vZGlzdC9leHQtY2VsbGVkaXRvci5jb21wb25lbnQuanMnO1xuLy9pbnB1dHM6IChuZXcgRVdDQ2VsbGVkaXRvcigpKS5wcm9wZXJ0aWVzLFxuLy9pbXBvcnQgRVdDQ2VsbGVkaXRvciBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1jbGFzc2ljL2Rpc3QvZXh0LWNlbGxlZGl0b3IuY29tcG9uZW50LmpzJztcbmltcG9ydCB7IEVXQ0NlbGxlZGl0b3IgfSBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1jbGFzc2ljJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2FuZ3VsYXJiYXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdFeHRDZWxsZWRpdG9yJyxcbiAgICBpbnB1dHM6IFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aW9ucycsJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLCdhY3RpdmVDb3VudGVyJywnYWN0aXZlSXRlbScsJ2FsaWdubWVudCcsJ2FsaWduT25TY3JvbGwnLCdhbGlnblRhcmdldCcsJ2FsbG93Qmx1cicsJ2FsbG93Rm9jdXNpbmdEaXNhYmxlZENoaWxkcmVuJywnYWx3YXlzT25Ub3AnLCdhbmNob3InLCdhbmNob3JTaXplJywnYW5pbWF0ZVNoYWRvdycsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvRGVzdHJveScsJ2F1dG9FbCcsJ2F1dG9SZW5kZXInLCd1bmRlZmluZWQnLCdhdXRvU2hvdycsJ2F1dG9TaXplJywnYmFzZUNscycsJ2JpbmQnLCdib3JkZXInLCdidWJibGVFdmVudHMnLCdjYW5jZWxPbkVzYycsJ2NoaWxkRWxzJywnY2xzJywnY29sdW1uV2lkdGgnLCdjb21wbGV0ZU9uRW50ZXInLCdjb21wb25lbnRDbHMnLCdjb21wb25lbnRMYXlvdXQnLCdjb25zdHJhaW4nLCdjb25zdHJhaW50SW5zZXRzJywnY29uc3RyYWluVG8nLCdjb250ZW50RWwnLCdjb250cm9sbGVyJywnZGF0YScsJ2RlZmF1bHRBbGlnbicsJ2RlZmF1bHRGb2N1cycsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGVmYXVsdHMnLCdkZWZhdWx0VHlwZScsJ2RldGFjaE9uUmVtb3ZlJywnZGlzYWJsZWQnLCdkaXNhYmxlZENscycsJ2RvY2snLCdkcmFnZ2FibGUnLCdmaWVsZCcsJ2ZpeGVkJywnZmxleCcsJ2Zsb2F0aW5nJywnZm9jdXNhYmxlQ29udGFpbmVyJywnZm9jdXNDbHMnLCdmb2N1c09uVG9Gcm9udCcsJ2Zvcm1CaW5kJywnZnJhbWUnLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlRWwnLCdoaWRlTW9kZScsJ2h0bWwnLCdpZCcsJ2lnbm9yZU5vQ2hhbmdlJywnaW5hY3RpdmVDaGlsZFRhYkluZGV4JywnaXRlbUlkJywnaXRlbXMnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGF5b3V0JywnbGlxdWlkTGF5b3V0JywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdtYXJnaW4nLCdtYXNrRGVmYXVsdHMnLCdtYXNrRWxlbWVudCcsJ21heEhlaWdodCcsJ21heFdpZHRoJywnbWluSGVpZ2h0JywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ25hbWVhYmxlJywnbmFtZUhvbGRlcicsJ29mZnNldHMnLCdvdmVyQ2xzJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywncGFkZGluZycsJ3BhcmVudEVsJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlZmVyZW5jZUhvbGRlcicsJ3JlZ2lvbicsJ3JlbmRlckNvbmZpZycsJ3JlbmRlckRhdGEnLCd1bmRlZmluZWQnLCdyZW5kZXJUbycsJ3JlbmRlclRwbCcsJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsJ3Jlc2l6YWJsZScsJ3Jlc2l6ZUhhbmRsZXMnLCdyZXZlcnRJbnZhbGlkJywnc2F2ZURlbGF5Jywnc2Nyb2xsYWJsZScsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFkb3dPZmZzZXQnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nocmlua1dyYXAnLCdzdGF0ZUV2ZW50cycsJ3N0YXRlZnVsJywnc3RhdGVJZCcsJ3N0eWxlJywnc3VzcGVuZExheW91dCcsJ3N3YWxsb3dLZXlzJywndGFiR3VhcmQnLCd0YWJJbmRleCcsJ3RvRnJvbnRPblNob3cnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1aUNscycsJ3VwZGF0ZUVsJywndXNlckNscycsJ3ZhbHVlJywndmlld01vZGVsJywnd2VpZ2h0Jywnd2lkdGgnLCd4dHlwZScsXSxcbiAgICBvdXRwdXRzOiBbJ3JlYWR5JywnYWN0aXZhdGUnLCdhZGQnLCdhZGRlZCcsJ2FmdGVybGF5b3V0JywnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLCdhZnRlcnJlbmRlcicsJ2JlZm9yZWFjdGl2YXRlJywnYmVmb3JlYWRkJywnYmVmb3JlY29tcGxldGUnLCdiZWZvcmVkZWFjdGl2YXRlJywnYmVmb3JlZGVzdHJveScsJ2JlZm9yZWhpZGUnLCdiZWZvcmVyZW1vdmUnLCdiZWZvcmVyZW5kZXInLCdiZWZvcmVzaG93JywnYmVmb3Jlc3RhcnRlZGl0JywnYmVmb3Jlc3RhdGVyZXN0b3JlJywnYmVmb3Jlc3RhdGVzYXZlJywnYmx1cicsJ2JveHJlYWR5JywnY2FuY2VsZWRpdCcsJ2NoaWxkbW92ZScsJ2NvbXBsZXRlJywnZGVhY3RpdmF0ZScsJ2Rlc3Ryb3knLCdkaXNhYmxlJywnZW5hYmxlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2hpZGUnLCdtb3ZlJywncmVtb3ZlJywncmVtb3ZlZCcsJ3JlbmRlcicsJ3Jlc2l6ZScsJ3Nob3cnLCdzcGVjaWFsa2V5Jywnc3RhcnRlZGl0Jywnc3RhdGVyZXN0b3JlJywnc3RhdGVzYXZlJyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDZWxsZWRpdG9yQ29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2VsbGVkaXRvckNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2UsXG4gICAgICAgIHZjOiBWaWV3Q29udGFpbmVyUmVmXG4gICAgICAgICkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgWydhTWUnLCAnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3Rpb25zJywnYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2FjdGl2ZUNvdW50ZXInLCdhY3RpdmVJdGVtJywnYWxpZ25tZW50JywnYWxpZ25PblNjcm9sbCcsJ2FsaWduVGFyZ2V0JywnYWxsb3dCbHVyJywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FuY2hvcicsJ2FuY2hvclNpemUnLCdhbmltYXRlU2hhZG93JywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9EZXN0cm95JywnYXV0b0VsJywnYXV0b1JlbmRlcicsJ3VuZGVmaW5lZCcsJ2F1dG9TaG93JywnYXV0b1NpemUnLCdiYXNlQ2xzJywnYmluZCcsJ2JvcmRlcicsJ2J1YmJsZUV2ZW50cycsJ2NhbmNlbE9uRXNjJywnY2hpbGRFbHMnLCdjbHMnLCdjb2x1bW5XaWR0aCcsJ2NvbXBsZXRlT25FbnRlcicsJ2NvbXBvbmVudENscycsJ2NvbXBvbmVudExheW91dCcsJ2NvbnN0cmFpbicsJ2NvbnN0cmFpbnRJbnNldHMnLCdjb25zdHJhaW5UbycsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdEFsaWduJywnZGVmYXVsdEZvY3VzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRUeXBlJywnZGV0YWNoT25SZW1vdmUnLCdkaXNhYmxlZCcsJ2Rpc2FibGVkQ2xzJywnZG9jaycsJ2RyYWdnYWJsZScsJ2ZpZWxkJywnZml4ZWQnLCdmbGV4JywnZmxvYXRpbmcnLCdmb2N1c2FibGVDb250YWluZXInLCdmb2N1c0NscycsJ2ZvY3VzT25Ub0Zyb250JywnZm9ybUJpbmQnLCdmcmFtZScsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVFbCcsJ2hpZGVNb2RlJywnaHRtbCcsJ2lkJywnaWdub3JlTm9DaGFuZ2UnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpdGVtSWQnLCdpdGVtcycsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYXlvdXQnLCdsaXF1aWRMYXlvdXQnLCdsaXN0ZW5lcnMnLCdsaXZlRHJhZycsJ2xvYWRlcicsJ21hcmdpbicsJ21hc2tEZWZhdWx0cycsJ21hc2tFbGVtZW50JywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbmFtZWFibGUnLCduYW1lSG9sZGVyJywnb2Zmc2V0cycsJ292ZXJDbHMnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdwYWRkaW5nJywncGFyZW50RWwnLCdwbHVnaW5zJywncHVibGlzaGVzJywncmVmZXJlbmNlJywncmVmZXJlbmNlSG9sZGVyJywncmVnaW9uJywncmVuZGVyQ29uZmlnJywncmVuZGVyRGF0YScsJ3VuZGVmaW5lZCcsJ3JlbmRlclRvJywncmVuZGVyVHBsJywncmVzZXRGb2N1c1Bvc2l0aW9uJywncmVzaXphYmxlJywncmVzaXplSGFuZGxlcycsJ3JldmVydEludmFsaWQnLCdzYXZlRGVsYXknLCdzY3JvbGxhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3R5bGUnLCdzdXNwZW5kTGF5b3V0Jywnc3dhbGxvd0tleXMnLCd0YWJHdWFyZCcsJ3RhYkluZGV4JywndG9Gcm9udE9uU2hvdycsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VpQ2xzJywndXBkYXRlRWwnLCd1c2VyQ2xzJywndmFsdWUnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NDZWxsZWRpdG9yKCkpLmV2ZW50cyxcbiAgICAgICAgICAgIFsncmVhZHknLCdhY3RpdmF0ZScsJ2FkZCcsJ2FkZGVkJywnYWZ0ZXJsYXlvdXQnLCdhZnRlcmxheW91dGFuaW1hdGlvbicsJ2FmdGVycmVuZGVyJywnYmVmb3JlYWN0aXZhdGUnLCdiZWZvcmVhZGQnLCdiZWZvcmVjb21wbGV0ZScsJ2JlZm9yZWRlYWN0aXZhdGUnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlaGlkZScsJ2JlZm9yZXJlbW92ZScsJ2JlZm9yZXJlbmRlcicsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdGFydGVkaXQnLCdiZWZvcmVzdGF0ZXJlc3RvcmUnLCdiZWZvcmVzdGF0ZXNhdmUnLCdibHVyJywnYm94cmVhZHknLCdjYW5jZWxlZGl0JywnY2hpbGRtb3ZlJywnY29tcGxldGUnLCdkZWFjdGl2YXRlJywnZGVzdHJveScsJ2Rpc2FibGUnLCdlbmFibGUnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGlkZScsJ21vdmUnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywnc2hvdycsJ3NwZWNpYWxrZXknLCdzdGFydGVkaXQnLCdzdGF0ZXJlc3RvcmUnLCdzdGF0ZXNhdmUnLF0sXG4gICAgICAgICAgICB2Y1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnY2VsbGVkaXRvcidcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cblxuXG4vLyBmdW5jdGlvbiB0b1Bhc2NhbENhc2Uocykge1xuLy8gICAgIHJldHVybiBzLm1hdGNoKC9bYS16XSsvZ2kpXG4vLyAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuam9pbignJylcbi8vIH1cbi8vIHZhciBwYXNjYWxOYW1lID0gdG9QYXNjYWxDYXNlKHRhZ05hbWUpXG5cbi8vdmFyIGV2ZW50cyA9IChuZXcgRVdDQ2VsbGVkaXRvcigpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19