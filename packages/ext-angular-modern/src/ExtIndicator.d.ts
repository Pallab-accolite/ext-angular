import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './common/angularbase';
import * as ɵngcc0 from '@angular/core';
export declare class ExtIndicatorComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExtIndicatorComponent, [null, { optional: true; host: true; skipSelf: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ExtIndicatorComponent, "ExtIndicator", never, { "aMe": "aMe"; "header": "header"; "renderer": "renderer"; "label": "label"; "fitToParent": "fitToParent"; "tab": "tab"; "config": "config"; "platformConfig": "platformConfig"; "extname": "extname"; "viewport": "viewport"; "align": "align"; "plugins": "plugins"; "responsiveConfig": "responsiveConfig"; "responsiveFormulas": "responsiveFormulas"; "activeIndex": "activeIndex"; "alignSelf": "alignSelf"; "alwaysOnTop": "alwaysOnTop"; "ariaAttributes": "ariaAttributes"; "ariaDescribedBy": "ariaDescribedBy"; "ariaLabel": "ariaLabel"; "ariaLabelledBy": "ariaLabelledBy"; "axisLock": "axisLock"; "bind": "bind"; "border": "border"; "bottom": "bottom"; "centered": "centered"; "cls": "cls"; "constrainAlign": "constrainAlign"; "contentEl": "contentEl"; "controller": "controller"; "count": "count"; "data": "data"; "defaultListenerScope": "defaultListenerScope"; "direction": "direction"; "disabled": "disabled"; "displayed": "displayed"; "docked": "docked"; "draggable": "draggable"; "undefined": "undefined"; "flex": "flex"; "floated": "floated"; "focusCls": "focusCls"; "fullscreen": "fullscreen"; "height": "height"; "hidden": "hidden"; "hideAnimation": "hideAnimation"; "hideMode": "hideMode"; "hideOnMaskTap": "hideOnMaskTap"; "html": "html"; "id": "id"; "instanceCls": "instanceCls"; "itemId": "itemId"; "keyMap": "keyMap"; "keyMapEnabled": "keyMapEnabled"; "keyMapTarget": "keyMapTarget"; "left": "left"; "listeners": "listeners"; "margin": "margin"; "maxHeight": "maxHeight"; "maxWidth": "maxWidth"; "minHeight": "minHeight"; "minWidth": "minWidth"; "modal": "modal"; "modelValidation": "modelValidation"; "name": "name"; "nameable": "nameable"; "padding": "padding"; "publishes": "publishes"; "record": "record"; "reference": "reference"; "relative": "relative"; "renderTo": "renderTo"; "right": "right"; "ripple": "ripple"; "scrollable": "scrollable"; "session": "session"; "shadow": "shadow"; "shareableName": "shareableName"; "shim": "shim"; "showAnimation": "showAnimation"; "stateful": "stateful"; "statefulDefaults": "statefulDefaults"; "stateId": "stateId"; "style": "style"; "tabIndex": "tabIndex"; "tapMode": "tapMode"; "toFrontOnShow": "toFrontOnShow"; "tooltip": "tooltip"; "top": "top"; "touchAction": "touchAction"; "tpl": "tpl"; "tplWriteMode": "tplWriteMode"; "translatable": "translatable"; "twoWayBindable": "twoWayBindable"; "ui": "ui"; "userCls": "userCls"; "userSelectable": "userSelectable"; "viewModel": "viewModel"; "weight": "weight"; "width": "width"; "x": "x"; "xtype": "xtype"; "y": "y"; "zIndex": "zIndex"; }, { "ready": "ready"; "created": "created"; "added": "added"; "beforebottomchange": "beforebottomchange"; "beforecenteredchange": "beforecenteredchange"; "beforedisabledchange": "beforedisabledchange"; "beforedockedchange": "beforedockedchange"; "beforeheightchange": "beforeheightchange"; "beforehiddenchange": "beforehiddenchange"; "beforehide": "beforehide"; "beforeleftchange": "beforeleftchange"; "beforemaxHeightchange": "beforemaxHeightchange"; "beforemaxWidthchange": "beforemaxWidthchange"; "beforeminHeightchange": "beforeminHeightchange"; "beforeminWidthchange": "beforeminWidthchange"; "beforeorientationchange": "beforeorientationchange"; "beforerightchange": "beforerightchange"; "beforescrollablechange": "beforescrollablechange"; "beforeshow": "beforeshow"; "beforetofront": "beforetofront"; "beforetopchange": "beforetopchange"; "beforewidthchange": "beforewidthchange"; "blur": "blur"; "bottomchange": "bottomchange"; "centeredchange": "centeredchange"; "destroy": "destroy"; "disabledchange": "disabledchange"; "dockedchange": "dockedchange"; "erased": "erased"; "floatingchange": "floatingchange"; "focus": "focus"; "focusenter": "focusenter"; "focusleave": "focusleave"; "fullscreen": "fullscreen"; "heightchange": "heightchange"; "hiddenchange": "hiddenchange"; "hide": "hide"; "indicatortap": "indicatortap"; "initialize": "initialize"; "leftchange": "leftchange"; "maxHeightchange": "maxHeightchange"; "maxWidthchange": "maxWidthchange"; "minHeightchange": "minHeightchange"; "minWidthchange": "minWidthchange"; "moved": "moved"; "next": "next"; "orientationchange": "orientationchange"; "painted": "painted"; "positionedchange": "positionedchange"; "previous": "previous"; "removed": "removed"; "resize": "resize"; "rightchange": "rightchange"; "scrollablechange": "scrollablechange"; "show": "show"; "tofront": "tofront"; "topchange": "topchange"; "updatedata": "updatedata"; "widthchange": "widthchange"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0SW5kaWNhdG9yLmQudHMiLCJzb3VyY2VzIjpbIkV4dEluZGljYXRvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7QUFNQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2NvbW1vbi9hbmd1bGFyYmFzZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBFeHRJbmRpY2F0b3JDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihlUmVmOiBFbGVtZW50UmVmLCBob3N0Q29tcG9uZW50OiBFbmdCYXNlLCB2YzogVmlld0NvbnRhaW5lclJlZik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=