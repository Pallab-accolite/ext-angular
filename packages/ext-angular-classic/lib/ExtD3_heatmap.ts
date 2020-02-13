//import EWCD3_heatmap from '../dist/ext-d3-heatmap.component.js';
//inputs: (new EWCD3_heatmap()).properties,
//import EWCD3_heatmap from '@sencha/ext-web-components-classic/dist/ext-d3-heatmap.component.js';
import { EWCD3_heatmap } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtD3_heatmap',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','clipScene','cls','colorAxis','componentCls','controller','defaultListenerScope','disabled','undefined','focusCls','height','hidden','hideMode','instanceCls','interactions','keyMap','keyMapEnabled','keyMapTarget','labels','legend','listeners','margin','name','nameable','padding','plugins','publishes','reference','renderTo','ripple','session','shareableName','size','store','style','tiles','tooltip','touchAction','transitions','twoWayBindable','ui','userCls','viewModel','width','xAxis','yAxis',],
    outputs: ['ready','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','sceneresize','scenesetup','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtD3_heatmapComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtD3_heatmapComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','clipScene','cls','colorAxis','componentCls','controller','defaultListenerScope','disabled','undefined','focusCls','height','hidden','hideMode','instanceCls','interactions','keyMap','keyMapEnabled','keyMapTarget','labels','legend','listeners','margin','name','nameable','padding','plugins','publishes','reference','renderTo','ripple','session','shareableName','size','store','style','tiles','tooltip','touchAction','transitions','twoWayBindable','ui','userCls','viewModel','width','xAxis','yAxis',],
            (new EWCD3_heatmap()).events,
            ['ready','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','sceneresize','scenesetup','widthchange',],
            vc
        )
        this.xtype = 'd3-heatmap'
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

//var events = (new EWCD3_heatmap()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
