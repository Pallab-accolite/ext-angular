//import EWCSparklinetristate from '../dist/ext-sparklinetristate.component.js';
//inputs: (new EWCSparklinetristate()).properties,
//import EWCSparklinetristate from '@sencha/ext-web-components-classic/dist/ext-sparklinetristate.component.js';
import { EWCSparklinetristate } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtSparklinetristate',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','barSpacing','barWidth','bind','border','cls','colorMap','controller','defaultListenerScope','disabled','disableTooltips','undefined','focusCls','height','hidden','hideMode','highlightColor','highlightLighten','instanceCls','keyMap','keyMapEnabled','keyMapTarget','lineColor','listeners','margin','name','nameable','negBarColor','plugins','posBarColor','publishes','reference','renderTo','ripple','session','shareableName','style','tipTpl','tooltipPrefix','tooltipSkipNull','tooltipSuffix','touchAction','twoWayBindable','ui','userCls','values','viewModel','width','zeroBarColor',],
    outputs: ['ready','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSparklinetristateComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtSparklinetristateComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','barSpacing','barWidth','bind','border','cls','colorMap','controller','defaultListenerScope','disabled','disableTooltips','undefined','focusCls','height','hidden','hideMode','highlightColor','highlightLighten','instanceCls','keyMap','keyMapEnabled','keyMapTarget','lineColor','listeners','margin','name','nameable','negBarColor','plugins','posBarColor','publishes','reference','renderTo','ripple','session','shareableName','style','tipTpl','tooltipPrefix','tooltipSkipNull','tooltipSuffix','touchAction','twoWayBindable','ui','userCls','values','viewModel','width','zeroBarColor',],
            (new EWCSparklinetristate()).events,
            ['ready','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
            vc
        )
        this.xtype = 'sparklinetristate'
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

//var events = (new EWCSparklinetristate()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
