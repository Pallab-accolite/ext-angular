//import EWCMenuitem from '../dist/ext-menuitem.component.js';
//inputs: (new EWCMenuitem()).properties,
//import EWCMenuitem from '@sencha/ext-web-components-classic/dist/ext-menuitem.component.js';
import { EWCMenuitem } from '@sencha/ext-web-components-classic';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './angularbase';

@Component({
    selector: 'ExtMenuitem',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCls','activeCounter','alignOnScroll','alignTarget','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoEl','autoRender','undefined','autoShow','baseCls','bind','border','undefined','childEls','clickHideDelay','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','destroyMenu','disabled','disabledCls','dock','draggable','emptyText','fixed','flex','floating','focusCls','focusOnToFront','formBind','frame','glyph','handler','height','hidden','hideMode','hideOnClick','href','hrefTarget','html','icon','iconCls','id','itemId','keyMap','keyMapEnabled','keyMapTarget','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','menu','menuAlign','menuExpandDelay','menuHideDelay','minHeight','minWidth','modal','modelValidation','nameable','overCls','undefined','undefined','padding','plain','plugins','publishes','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','style','tabIndex','text','toFrontOnShow','tooltip','tooltipType','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
    outputs: ['ready','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','click','deactivate','destroy','disable','enable','focus','focusenter','focusleave','hide','iconchange','move','removed','render','resize','show','staterestore','statesave','textchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtMenuitemComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtMenuitemComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCls','activeCounter','alignOnScroll','alignTarget','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoEl','autoRender','undefined','autoShow','baseCls','bind','border','undefined','childEls','clickHideDelay','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','destroyMenu','disabled','disabledCls','dock','draggable','emptyText','fixed','flex','floating','focusCls','focusOnToFront','formBind','frame','glyph','handler','height','hidden','hideMode','hideOnClick','href','hrefTarget','html','icon','iconCls','id','itemId','keyMap','keyMapEnabled','keyMapTarget','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','menu','menuAlign','menuExpandDelay','menuHideDelay','minHeight','minWidth','modal','modelValidation','nameable','overCls','undefined','undefined','padding','plain','plugins','publishes','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','style','tabIndex','text','toFrontOnShow','tooltip','tooltipType','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
            (new EWCMenuitem()).events,
            ['ready','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','click','deactivate','destroy','disable','enable','focus','focusenter','focusleave','hide','iconchange','move','removed','render','resize','show','staterestore','statesave','textchange',],
            vc
        )
        this.xtype = 'menuitem'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}


// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)

//var events = (new EWCMenuitem()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
