import * as tslib_1 from "tslib";
//import EWCCalendar_monthview from '../dist/ext-calendar-monthview.component.js';
//inputs: (new EWCCalendar_monthview()).properties,
import EWCCalendar_monthview from '@sencha/ext-web-components-classic/dist/ext-calendar-monthview.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
var ExtCalendar_monthviewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_monthviewComponent, _super);
    function ExtCalendar_monthviewComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'addForm', 'addOnSelect', 'allowSelection', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'compact', 'compactOptions', 'controller', 'controlStoreRange', 'dayFormat', 'defaultListenerScope', 'disabled', 'draggable', 'droppable', 'editForm', 'eventDefaults', 'undefined', 'firstDayOfWeek', 'focusCls', 'gestureNavigation', 'header', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'overflowText', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'showOverflow', 'store', 'style', 'timezoneOffset', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'visibleDays', 'visibleWeeks', 'weekendDays', 'width',], (new EWCCalendar_monthview()).events, ['ready', 'beforedisabledchange', 'beforeeventadd', 'beforeeventdragstart', 'beforeeventedit', 'beforeheightchange', 'beforehiddenchange', 'beforewidthchange', 'blur', 'disabledchange', 'eventadd', 'eventdrop', 'eventedit', 'eventtap', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'select', 'selectrange', 'validateeventadd', 'validateeventdrop', 'validateeventedit', 'valuechange', 'widthchange',], vc) || this;
        _this.xtype = 'calendar-monthview';
        return _this;
    }
    ExtCalendar_monthviewComponent_1 = ExtCalendar_monthviewComponent;
    ExtCalendar_monthviewComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCalendar_monthviewComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCalendar_monthviewComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCalendar_monthviewComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCalendar_monthviewComponent_1;
    ExtCalendar_monthviewComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtCalendar_monthviewComponent = ExtCalendar_monthviewComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ExtCalendar_monthview',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'addForm', 'addOnSelect', 'allowSelection', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'compact', 'compactOptions', 'controller', 'controlStoreRange', 'dayFormat', 'defaultListenerScope', 'disabled', 'draggable', 'droppable', 'editForm', 'eventDefaults', 'undefined', 'firstDayOfWeek', 'focusCls', 'gestureNavigation', 'header', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'overflowText', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'showOverflow', 'store', 'style', 'timezoneOffset', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'visibleDays', 'visibleWeeks', 'weekendDays', 'width',],
            outputs: ['ready', 'beforedisabledchange', 'beforeeventadd', 'beforeeventdragstart', 'beforeeventedit', 'beforeheightchange', 'beforehiddenchange', 'beforewidthchange', 'blur', 'disabledchange', 'eventadd', 'eventdrop', 'eventedit', 'eventtap', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'select', 'selectrange', 'validateeventadd', 'validateeventdrop', 'validateeventedit', 'valuechange', 'widthchange',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCalendar_monthviewComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
    ], ExtCalendar_monthviewComponent);
    return ExtCalendar_monthviewComponent;
}(EngBase));
export { ExtCalendar_monthviewComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCCalendar_monthview()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0Q2FsZW5kYXJfbW9udGh2aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1jbGFzc2ljLyIsInNvdXJjZXMiOlsic3JjL0V4dENhbGVuZGFyX21vbnRodmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0ZBQWtGO0FBQ2xGLG1EQUFtRDtBQUNuRCxPQUFPLHFCQUFxQixNQUFNLDZFQUE2RSxDQUFDO0FBQ2hILE9BQU8sRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN4QztJQUFvRCwwREFBTztJQUN2RCx3Q0FDSSxJQUFnQixFQUNnQixhQUFzQixFQUN0RCxFQUFvQjtRQUh4QixZQUtJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLFNBQVMsRUFBQyxhQUFhLEVBQUMsZ0JBQWdCLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyxZQUFZLEVBQUMsbUJBQW1CLEVBQUMsV0FBVyxFQUFDLHNCQUFzQixFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxtQkFBbUIsRUFBQyxRQUFRLEVBQUMsUUFBUSxF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Q0FBMkM7QUFDM0MsR0FBRztBQUNILGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IEVXQ0NhbGVuZGFyX21vbnRodmlldyBmcm9tICcuLi9kaXN0L2V4dC1jYWxlbmRhci1tb250aHZpZXcuY29tcG9uZW50LmpzJztcbi8vaW5wdXRzOiAobmV3IEVXQ0NhbGVuZGFyX21vbnRodmlldygpKS5wcm9wZXJ0aWVzLFxuaW1wb3J0IEVXQ0NhbGVuZGFyX21vbnRodmlldyBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1jbGFzc2ljL2Rpc3QvZXh0LWNhbGVuZGFyLW1vbnRodmlldy5jb21wb25lbnQuanMnO1xuaW1wb3J0IHtcbiAgICBIb3N0LFxuICAgIE9wdGlvbmFsLFxuICAgIFNraXBTZWxmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWYsXG4gICAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vYW5ndWxhcmJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ0V4dENhbGVuZGFyX21vbnRodmlldycsXG4gICAgaW5wdXRzOiBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FkZEZvcm0nLCdhZGRPblNlbGVjdCcsJ2FsbG93U2VsZWN0aW9uJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2JpbmQnLCdib3JkZXInLCdjbHMnLCdjb21wYWN0JywnY29tcGFjdE9wdGlvbnMnLCdjb250cm9sbGVyJywnY29udHJvbFN0b3JlUmFuZ2UnLCdkYXlGb3JtYXQnLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2Rpc2FibGVkJywnZHJhZ2dhYmxlJywnZHJvcHBhYmxlJywnZWRpdEZvcm0nLCdldmVudERlZmF1bHRzJywndW5kZWZpbmVkJywnZmlyc3REYXlPZldlZWsnLCdmb2N1c0NscycsJ2dlc3R1cmVOYXZpZ2F0aW9uJywnaGVhZGVyJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZU1vZGUnLCdpbnN0YW5jZUNscycsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsaXN0ZW5lcnMnLCdtYXJnaW4nLCduYW1lJywnbmFtZWFibGUnLCdvdmVyZmxvd1RleHQnLCdwbHVnaW5zJywncHVibGlzaGVzJywncmVmZXJlbmNlJywncmVuZGVyVG8nLCdyaXBwbGUnLCdzZXNzaW9uJywnc2hhcmVhYmxlTmFtZScsJ3Nob3dPdmVyZmxvdycsJ3N0b3JlJywnc3R5bGUnLCd0aW1lem9uZU9mZnNldCcsJ3RvdWNoQWN0aW9uJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VzZXJDbHMnLCd2YWx1ZScsJ3ZpZXdNb2RlbCcsJ3Zpc2libGVEYXlzJywndmlzaWJsZVdlZWtzJywnd2Vla2VuZERheXMnLCd3aWR0aCcsXSxcbiAgICBvdXRwdXRzOiBbJ3JlYWR5JywnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLCdiZWZvcmVldmVudGFkZCcsJ2JlZm9yZWV2ZW50ZHJhZ3N0YXJ0JywnYmVmb3JlZXZlbnRlZGl0JywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3Jld2lkdGhjaGFuZ2UnLCdibHVyJywnZGlzYWJsZWRjaGFuZ2UnLCdldmVudGFkZCcsJ2V2ZW50ZHJvcCcsJ2V2ZW50ZWRpdCcsJ2V2ZW50dGFwJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2hlaWdodGNoYW5nZScsJ2hpZGRlbmNoYW5nZScsJ3NlbGVjdCcsJ3NlbGVjdHJhbmdlJywndmFsaWRhdGVldmVudGFkZCcsJ3ZhbGlkYXRlZXZlbnRkcm9wJywndmFsaWRhdGVldmVudGVkaXQnLCd2YWx1ZWNoYW5nZScsJ3dpZHRoY2hhbmdlJyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDYWxlbmRhcl9tb250aHZpZXdDb21wb25lbnQpfV0sXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl9tb250aHZpZXdDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWRkRm9ybScsJ2FkZE9uU2VsZWN0JywnYWxsb3dTZWxlY3Rpb24nLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYmluZCcsJ2JvcmRlcicsJ2NscycsJ2NvbXBhY3QnLCdjb21wYWN0T3B0aW9ucycsJ2NvbnRyb2xsZXInLCdjb250cm9sU3RvcmVSYW5nZScsJ2RheUZvcm1hdCcsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGlzYWJsZWQnLCdkcmFnZ2FibGUnLCdkcm9wcGFibGUnLCdlZGl0Rm9ybScsJ2V2ZW50RGVmYXVsdHMnLCd1bmRlZmluZWQnLCdmaXJzdERheU9mV2VlaycsJ2ZvY3VzQ2xzJywnZ2VzdHVyZU5hdmlnYXRpb24nLCdoZWFkZXInLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlTW9kZScsJ2luc3RhbmNlQ2xzJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xpc3RlbmVycycsJ21hcmdpbicsJ25hbWUnLCduYW1lYWJsZScsJ292ZXJmbG93VGV4dCcsJ3BsdWdpbnMnLCdwdWJsaXNoZXMnLCdyZWZlcmVuY2UnLCdyZW5kZXJUbycsJ3JpcHBsZScsJ3Nlc3Npb24nLCdzaGFyZWFibGVOYW1lJywnc2hvd092ZXJmbG93Jywnc3RvcmUnLCdzdHlsZScsJ3RpbWV6b25lT2Zmc2V0JywndG91Y2hBY3Rpb24nLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndXNlckNscycsJ3ZhbHVlJywndmlld01vZGVsJywndmlzaWJsZURheXMnLCd2aXNpYmxlV2Vla3MnLCd3ZWVrZW5kRGF5cycsJ3dpZHRoJyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NDYWxlbmRhcl9tb250aHZpZXcoKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlZXZlbnRhZGQnLCdiZWZvcmVldmVudGRyYWdzdGFydCcsJ2JlZm9yZWV2ZW50ZWRpdCcsJ2JlZm9yZWhlaWdodGNoYW5nZScsJ2JlZm9yZWhpZGRlbmNoYW5nZScsJ2JlZm9yZXdpZHRoY2hhbmdlJywnYmx1cicsJ2Rpc2FibGVkY2hhbmdlJywnZXZlbnRhZGQnLCdldmVudGRyb3AnLCdldmVudGVkaXQnLCdldmVudHRhcCcsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdoZWlnaHRjaGFuZ2UnLCdoaWRkZW5jaGFuZ2UnLCdzZWxlY3QnLCdzZWxlY3RyYW5nZScsJ3ZhbGlkYXRlZXZlbnRhZGQnLCd2YWxpZGF0ZWV2ZW50ZHJvcCcsJ3ZhbGlkYXRlZXZlbnRlZGl0JywndmFsdWVjaGFuZ2UnLCd3aWR0aGNoYW5nZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdjYWxlbmRhci1tb250aHZpZXcnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ0NhbGVuZGFyX21vbnRodmlldygpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19