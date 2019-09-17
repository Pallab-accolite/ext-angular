import { QueryList } from '@angular/core';
export declare class EngBase {
    private metaData;
    hostComponent: EngBase;
    static count: any;
    static DIRECTION: any;
    ext: any;
    newDiv: any;
    xtype: any;
    properties: any;
    propertiesobject: any;
    events: any;
    eventnames: any;
    A: any;
    private node;
    parentNode: any;
    base: any;
    nodeName: any;
    ewcChildren: any;
    rawChildren: any;
    hasParent: any;
    parentType: any;
    children: any;
    last: any;
    _extroute: any;
    _extroutes: QueryList<any>;
    _extitem: any;
    _extitems: QueryList<any>;
    _childComponents: QueryList<EngBase>;
    readonly childComponents: EngBase[];
    constructor(nativeElement: any, metaData: any, hostComponent: EngBase);
    baseOnInit(metaData: any): void;
    baseAfterViewInit(metaData: any): void;
    initMe(): void;
    createRawChildren(): void;
    setParentType(): void;
    setDirection(): void;
    figureOutA(): void;
    init(component: any): void;
    createExtComponent(): void;
    assessAngularChildren(base: any, xtype: any, A: any): void;
    assessChildren(base: any, xtype: any): void;
    checkParent(component: any, base: any, me: any): void;
    addChildren(child: any, children: any): void;
    addTheChild(parentCmp: any, childCmp: any, location: any): void;
    atEnd(): void;
    readonly currentEl: any;
    getCurrentElName(component: any): any;
    readonly currentElName: any;
    readonly isAngular: boolean;
    readonly parentEl: any;
    readonly parentElName: any;
    sendReadyEvent(component: any): void;
    createProps(properties: any, propertiesobject: any, events: any, eventnames: any): void;
    baseOnChanges(changes: any): void;
    ngOnDestroy(): void;
}
