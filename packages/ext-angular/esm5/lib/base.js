/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, ContentChild, ContentChildren, QueryList } from '@angular/core';
var base = /** @class */ (function () {
    function base(nativeElement, metaData, hostComponent) {
        var _this = this;
        this.metaData = metaData;
        this.hostComponent = hostComponent;
        this._extChildren = false;
        this.q = null;
        this._nativeElement = nativeElement;
        this._hostComponent = hostComponent;
        metaData.EVENTNAMES.forEach((/**
         * @param {?} event
         * @param {?} n
         * @return {?}
         */
        function (event, n) {
            if (event != 'fullscreen') {
                ((/** @type {?} */ (_this)))[event] = new EventEmitter();
            }
            else {
                ((/** @type {?} */ (_this)))[event + 'event'] = new EventEmitter();
            }
        }));
    }
    /**
     * @param {?} metaData
     * @return {?}
     */
    base.prototype.baseOnInit = /**
     * @param {?} metaData
     * @return {?}
     */
    function (metaData) {
        //console.log(`ngOnInit: ${metaData.XTYPE}`)
        /** @type {?} */
        var me = this;
        /** @type {?} */
        var o = {};
        o.xtype = metaData.XTYPE;
        /** @type {?} */
        var listenersProvided = false;
        for (var i = 0; i < me.metaData.PROPERTIES.length; i++) {
            /** @type {?} */
            var prop = me.metaData.PROPERTIES[i];
            if (prop == 'handler') {
                if (me[prop] != undefined) {
                    o[prop] = me[prop];
                }
            }
            //need to handle listeners coming in here
            if ((o.xtype === 'cartesian' || o.xtype === 'polar') && prop === 'layout') {
            }
            else if (prop == 'listeners' && me[prop] != undefined) {
                o[prop] = me[prop];
                listenersProvided = true;
            }
            else {
                if (me[prop] != undefined &&
                    prop != 'listeners' &&
                    prop != 'config' &&
                    prop != 'handler' &&
                    prop != 'fitToParent') {
                    o[prop] = me[prop];
                }
            }
        }
        if (true === me.fitToParent) {
            o.top = 0,
                o.left = 0,
                o.width = '100%',
                o.height = '100%';
        }
        if (me.config !== {}) {
            Ext.apply(o, me.config);
        }
        if (!listenersProvided) {
            o.listeners = {};
            /** @type {?} */
            var EVENTS = metaData.EVENTS;
            EVENTS.forEach((/**
             * @param {?} event
             * @param {?} index
             * @param {?} array
             * @return {?}
             */
            function (event, index, array) {
                /** @type {?} */
                var eventname = event.name;
                /** @type {?} */
                var eventparameters = event.parameters;
                o.listeners[eventname] = (/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var parameters = eventparameters;
                    /** @type {?} */
                    var parms = parameters.split(',');
                    /** @type {?} */
                    var args = Array.prototype.slice.call(arguments);
                    /** @type {?} */
                    var emitparms = {};
                    for (var i_1 = 0, j = parms.length; i_1 < j; i_1++) {
                        emitparms[parms[i_1]] = args[i_1];
                    }
                    me[eventname].emit(emitparms);
                });
            }));
        }
        if (this._nativeElement.parentElement != null) {
            o.renderTo = this._nativeElement;
        }
        if (o.xtype == 'dialog') {
            o.renderTo = undefined;
        }
        this.ext = Ext.create(o);
    };
    /**
     * @return {?}
     */
    base.prototype.baseAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this._extitems.length == 1) {
            if (this._hostComponent != null) {
                this.ext.setHtml(this._extitem.nativeElement);
            }
        }
        if (this._extroutes.length == 1) {
            this.ext.setHtml(this._extroute.nativeElement);
        }
        if (this._hostComponent != null) {
            /** @type {?} */
            var parentCmp = this._hostComponent.ext;
            /** @type {?} */
            var childCmp = this.ext;
            this.addTheChild(parentCmp, childCmp);
        }
        this['ready'].emit(this);
    };
    /**
     * @param {?} parentCmp
     * @param {?} childCmp
     * @return {?}
     */
    base.prototype.addTheChild = /**
     * @param {?} parentCmp
     * @param {?} childCmp
     * @return {?}
     */
    function (parentCmp, childCmp) {
        /** @type {?} */
        var parentxtype = parentCmp.xtype;
        /** @type {?} */
        var childxtype = childCmp.xtype;
        if (this.ext.initialConfig.align != undefined) {
            if (parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'button') {
                console.error('Can only use align property if parent is a Titlebar or Grid or Button');
                return;
            }
        }
        if (parentxtype === 'grid' || parentxtype === 'lockedgrid') {
            if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn' || childxtype === 'booleancolumn') {
                parentCmp.addColumn(childCmp);
                return;
            }
            else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
                if (parentCmp.getHideHeaders() === false) {
                    //var j = parentCmp.items.items.length;
                    parentCmp.insert(1, childCmp);
                    return;
                }
                else {
                    parentCmp.add(childCmp);
                    return;
                }
            }
            else {
                console.log('unhandled else in addTheChild');
                console.log(parentxtype);
                console.log(childxtype);
            }
        }
        if (childxtype === 'tooltip') {
            parentCmp.setTooltip(childCmp);
            return;
        }
        if (childxtype === 'plugin') {
            parentCmp.setPlugin(childCmp);
            return;
        }
        else if (parentxtype === 'button' ||
            parentxtype === 'menuitem' ||
            parentxtype === 'menucheckitem') {
            if (childxtype === 'menu') {
                parentCmp.setMenu(childCmp);
                return;
            }
            else {
                console.log('child not added');
            }
        }
        if (childxtype === 'toolbar' && Ext.isClassic === true) {
            parentCmp.addDockedItems(childCmp);
            return;
        }
        else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
            if (parentCmp.getHideHeaders() === false) {
                //var j: any = parentCmp.items.items.length
                //parentCmp.insert(j - 1, childCmp)
                parentCmp.insert(1, childCmp);
                return;
            }
            else {
                parentCmp.add(childCmp);
                return;
            }
        }
        if (parentCmp.add != undefined) {
            parentCmp.add(childCmp);
            return;
        }
        console.log('child not added');
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    base.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        //console.log(`ngOnChanges`)
        //console.log(changes)
        /** @type {?} */
        var changesMsgs = [];
        for (var propName in changes) {
            /** @type {?} */
            var verb = '';
            if (changes[propName].firstChange === true) {
                verb = 'initialized';
            }
            else {
                verb = 'changed';
            }
            /** @type {?} */
            var val = changes[propName].currentValue;
            if (this.ext != undefined) {
                /** @type {?} */
                var capPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
                /** @type {?} */
                var setFunction = 'set' + capPropName;
                if (this.ext[setFunction] != undefined) {
                    this.ext[setFunction](val);
                }
                else {
                    console.error(setFunction + ' not found for ' + this.ext.xtype);
                }
            }
            else {
                if (verb == 'changed') {
                    console.log('change needed and ext not defined');
                }
            }
            changesMsgs.push(propName + " " + verb + " to \"" + val + "\"");
        }
        //console.log(`OnChanges: ${changesMsgs.join('; ')}`)
    };
    /**
     * @return {?}
     */
    base.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var childCmp;
        /** @type {?} */
        var parentCmp;
        try {
            childCmp = this.ext;
            if (this._hostComponent != null) {
                parentCmp = this._hostComponent.ext;
                if (parentCmp.xtype == 'button' && childCmp.xtype == 'menu') {
                    //console.log('button/menu not deleted')
                }
                else if (parentCmp.xtype == 'carousel') {
                    //console.log('carousel parent not deleted')
                }
                else if (parentCmp.xtype == 'grid' && childCmp.xtype == 'column') {
                    //console.log('grid/column not deleted')
                    //console.log(childCmp)
                }
                else if (parentCmp.xtype == 'segmentedbutton' && childCmp.xtype == 'button') {
                    //console.log('segmentedbutton/button not deleted')
                }
                else if (parentCmp.xtype == 'button' && childCmp.xtype == 'tooltip') {
                    //console.log('button/tooltip not deleted')
                }
                else if (parentCmp.xtype == 'titlebar' && childCmp.xtype == 'button') {
                    //console.log('titlebar/button not deleted')
                }
                else if (parentCmp.xtype == 'titlebar' && childCmp.xtype == 'searchfield') {
                    //console.log('titlebar/searchfield not deleted')
                }
                else {
                    parentCmp.remove([childCmp]);
                    childCmp.destroy();
                }
            }
            else {
                if (childCmp != undefined) {
                    childCmp.destroy();
                }
                else {
                    console.log('no destroy');
                }
            }
        }
        catch (e) {
            console.error(e);
            console.log('*****');
            console.log(parentCmp);
            console.log(childCmp);
            console.log('*****');
        }
    };
    base.propDecorators = {
        _extroute: [{ type: ContentChild, args: ['extroute',] }],
        _extroutes: [{ type: ContentChildren, args: ['extroute',] }],
        _extitem: [{ type: ContentChild, args: ['extitem',] }],
        _extitems: [{ type: ContentChildren, args: ['extitem',] }]
    };
    return base;
}());
export { base };
if (false) {
    /** @type {?} */
    base.prototype.ext;
    /**
     * @type {?}
     * @private
     */
    base.prototype._nativeElement;
    /**
     * @type {?}
     * @private
     */
    base.prototype._hostComponent;
    /**
     * @type {?}
     * @private
     */
    base.prototype._extChildren;
    /**
     * @type {?}
     * @private
     */
    base.prototype.q;
    /** @type {?} */
    base.prototype._extroute;
    /** @type {?} */
    base.prototype._extroutes;
    /** @type {?} */
    base.prototype._extitem;
    /** @type {?} */
    base.prototype._extitems;
    /**
     * @type {?}
     * @private
     */
    base.prototype.metaData;
    /** @type {?} */
    base.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUtMLFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUVmLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQTtBQUV0QjtJQU9FLGNBQ0UsYUFBa0IsRUFDVixRQUFhLEVBQ2QsYUFBb0I7UUFIN0IsaUJBaUJDO1FBZlMsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFPO1FBTnJCLGlCQUFZLEdBQVEsS0FBSyxDQUFBO1FBUS9CLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFBO1FBQ2IsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUE7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUE7UUFFbkMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7OztRQUFFLFVBQUMsS0FBVSxFQUFFLENBQU07WUFDOUMsSUFBSSxLQUFLLElBQUksWUFBWSxFQUFFO2dCQUN6QixDQUFDLG1CQUFLLEtBQUksRUFBQSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTthQUN4QztpQkFDSTtnQkFDSCxDQUFDLG1CQUFLLEtBQUksRUFBQSxDQUFDLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7YUFDbEQ7UUFDSCxDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7O0lBRUQseUJBQVU7Ozs7SUFBVixVQUFXLFFBQWE7OztZQUVsQixFQUFFLEdBQVEsSUFBSTs7WUFDZCxDQUFDLEdBQVEsRUFBRTtRQUNmLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQTs7WUFDcEIsaUJBQWlCLEdBQUcsS0FBSztRQUM3QixLQUFLLElBQUksQ0FBQyxHQUFH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QUMsQ0FBQTtvQkFDNUIsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO2lCQUNuQjthQUNGO2lCQUNJO2dCQUNILElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtvQkFDekIsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO2lCQUNuQjtxQkFDSTtvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO2lCQUMxQjthQUNGO1NBQ0Y7UUFDRCxPQUFNLENBQUMsRUFBRTtZQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUNyQjtJQUNILENBQUM7OzRCQWxMQSxZQUFZLFNBQUMsVUFBVTs2QkFDdkIsZUFBZSxTQUFDLFVBQVU7MkJBQzFCLFlBQVksU0FBQyxTQUFTOzRCQUN0QixlQUFlLFNBQUMsU0FBUzs7SUF5TjVCLFdBQUM7Q0FBQSxBQTdURCxJQTZUQztTQTdUWSxJQUFJOzs7SUFDZixtQkFBZTs7Ozs7SUFDZiw4QkFBMkI7Ozs7O0lBQzNCLDhCQUEyQjs7Ozs7SUFDM0IsNEJBQWlDOzs7OztJQUNqQyxpQkFBeUI7O0lBNEZ6Qix5QkFBeUM7O0lBQ3pDLDBCQUF3RDs7SUFDeEQsd0JBQXVDOztJQUN2Qyx5QkFBc0Q7Ozs7O0lBM0ZwRCx3QkFBcUI7O0lBQ3JCLDZCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIEV4dDogYW55XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFZpZXdDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmV4cG9ydCBjbGFzcyBiYXNlIHtcbiAgcHVibGljIGV4dDogYW55XG4gIHByaXZhdGUgX25hdGl2ZUVsZW1lbnQ6IGFueVxuICBwcml2YXRlIF9ob3N0Q29tcG9uZW50OiBhbnlcbiAgcHJpdmF0ZSBfZXh0Q2hpbGRyZW46IGFueSA9IGZhbHNlXG4gIHByaXZhdGUgcTogUXVlcnlMaXN0PGFueT5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBuYXRpdmVFbGVtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBtZXRhRGF0YTogYW55LFxuICAgIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZVxuICApIHtcbiAgICB0aGlzLnEgPSBudWxsXG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IG5hdGl2ZUVsZW1lbnRcbiAgICB0aGlzLl9ob3N0Q29tcG9uZW50ID0gaG9zdENvbXBvbmVudFxuXG4gICAgbWV0YURhdGEuRVZFTlROQU1FUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4gICAgICBpZiAoZXZlbnQgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICg8YW55PnRoaXMpW2V2ZW50XSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICg8YW55PnRoaXMpW2V2ZW50ICsgJ2V2ZW50J10gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmFzZU9uSW5pdChtZXRhRGF0YTogYW55KSB7XG4gICAgLy9jb25zb2xlLmxvZyhgbmdPbkluaXQ6ICR7bWV0YURhdGEuWFRZUEV9YClcbiAgICBsZXQgbWU6IGFueSA9IHRoaXNcbiAgICBsZXQgbzogYW55ID0ge31cbiAgICBvLnh0eXBlID0gbWV0YURhdGEuWFRZUEVcbiAgICBsZXQgbGlzdGVuZXJzUHJvdmlkZWQgPSBmYWxzZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWUubWV0YURhdGEuUFJPUEVSVElFUy5sZW5ndGg7IGkrKykgeyBcbiAgICAgIHZhciBwcm9wID0gbWUubWV0YURhdGEuUFJPUEVSVElFU1tpXTtcbiAgICAgIGlmIChwcm9wID09ICdoYW5kbGVyJykge1xuICAgICAgICBpZiAobWVbcHJvcF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgb1twcm9wXSA9IG1lW3Byb3BdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vbmVlZCB0byBoYW5kbGUgbGlzdGVuZXJzIGNvbWluZyBpbiBoZXJlXG4gICAgICBpZiAoKG8ueHR5cGUgPT09ICdjYXJ0ZXNpYW4nIHx8IG8ueHR5cGUgPT09ICdwb2xhcicpICYmIHByb3AgPT09ICdsYXlvdXQnKSB7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHByb3AgPT0gJ2xpc3RlbmVycycgJiYgbWVbcHJvcF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9bcHJvcF0gPSBtZVtwcm9wXTtcbiAgICAgICAgbGlzdGVuZXJzUHJvdmlkZWQgPSB0cnVlO1xuICAgICAgfSBcbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAobWVbcHJvcF0gIT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnbGlzdGVuZXJzJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2NvbmZpZycgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdoYW5kbGVyJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2ZpdFRvUGFyZW50JykgeyBcbiAgICAgICAgICBvW3Byb3BdID0gbWVbcHJvcF07IFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRydWUgPT09IG1lLmZpdFRvUGFyZW50KSB7XG4gICAgICBvLnRvcD0wLCBcbiAgICAgIG8ubGVmdD0wLCBcbiAgICAgIG8ud2lkdGg9JzEwMCUnLCBcbiAgICAgIG8uaGVpZ2h0PScxMDAlJ1xuICAgIH1cbiAgICBpZiAobWUuY29uZmlnICE9PSB7fSApIHtcbiAgICAgIEV4dC5hcHBseShvLCBtZS5jb25maWcpO1xuICAgIH1cblxuICAgIGlmKCFsaXN0ZW5lcnNQcm92aWRlZCkge1xuICAgICAgby5saXN0ZW5lcnMgPSB7fVxuICAgICAgdmFyIEVWRU5UUyA9IG1ldGFEYXRhLkVWRU5UU1xuICAgICAgRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50OiBhbnksIGluZGV4OiBhbnksIGFycmF5OiBhbnkpIHtcbiAgICAgICAgbGV0IGV2ZW50bmFtZTogYW55ID0gZXZlbnQubmFtZVxuICAgICAgICBsZXQgZXZlbnRwYXJhbWV0ZXJzOiBhbnkgPSBldmVudC5wYXJhbWV0ZXJzXG4gICAgICAgIG8ubGlzdGVuZXJzW2V2ZW50bmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZXQgcGFyYW1ldGVyczogYW55ID0gZXZlbnRwYXJhbWV0ZXJzXG4gICAgICAgICAgbGV0IHBhcm1zID0gcGFyYW1ldGVycy5zcGxpdCgnLCcpXG4gICAgICAgICAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAgICAgbGV0IGVtaXRwYXJtczogYW55ID0ge31cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHBhcm1zLmxlbmd0aDsgaSA8IGo7IGkrKyApIHtcbiAgICAgICAgICAgIGVtaXRwYXJtc1twYXJtc1tpXV0gPSBhcmdzW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtZVtldmVudG5hbWVdLmVtaXQoZW1pdHBhcm1zKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgby5yZW5kZXJUbyA9IHRoaXMuX25hdGl2ZUVsZW1lbnRcbiAgICB9XG5cbiAgICBpZiAoby54dHlwZSA9PSAnZGlhbG9nJykge1xuICAgICAgby5yZW5kZXJUbyA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLmV4dCA9IEV4dC5jcmVhdGUobylcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGQoJ2V4dHJvdXRlJykgX2V4dHJvdXRlOiBhbnk7XG4gIEBDb250ZW50Q2hpbGRyZW4oJ2V4dHJvdXRlJykgX2V4dHJvdXRlczogUXVlcnlMaXN0PGFueT47XG4gIEBDb250ZW50Q2hpbGQoJ2V4dGl0ZW0nKSBfZXh0aXRlbTogYW55O1xuICBAQ29udGVudENoaWxkcmVuKCdleHRpdGVtJykgX2V4dGl0ZW1zOiBRdWVyeUxpc3Q8YW55PjtcbiAgYmFzZUFmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGlmICh0aGlzLl9ob3N0Q29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmV4dC5zZXRIdG1sKHRoaXMuX2V4dGl0ZW0ubmF0aXZlRWxlbWVudClcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fZXh0cm91dGVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICB0aGlzLmV4dC5zZXRIdG1sKHRoaXMuX2V4dHJvdXRlLm5hdGl2ZUVsZW1lbnQpXG4gICAgfVxuICAgIGlmKHRoaXMuX2hvc3RDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgdmFyIHBhcmVudENtcCA9IHRoaXMuX2hvc3RDb21wb25lbnQuZXh0XG4gICAgICB2YXIgY2hpbGRDbXAgPSB0aGlzLmV4dFxuICAgICAgdGhpcy5hZGRUaGVDaGlsZChwYXJlbnRDbXAsY2hpbGRDbXApXG4gICAgfVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG5cbiAgYWRkVGhlQ2hpbGQocGFyZW50Q21wLCBjaGlsZENtcCkge1xuICAgIHZhciBwYXJlbnR4dHlwZSA9IHBhcmVudENtcC54dHlwZVxuICAgIHZhciBjaGlsZHh0eXBlID0gY2hpbGRDbXAueHR5cGVcblxuICAgIGlmICh0aGlzLmV4dC5pbml0aWFsQ29uZmlnLmFsaWduICE9IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHBhcmVudHh0eXBlICE9ICd0aXRsZWJhcicgJiYgcGFyZW50eHR5cGUgIT0gJ2dyaWQnICYmIHBhcmVudHh0eXBlICE9ICdidXR0b24nKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbiBvbmx5IHVzZSBhbGlnbiBwcm9wZXJ0eSBpZiBwYXJlbnQgaXMgYSBUaXRsZWJhciBvciBHcmlkIG9yIEJ1dHRvbicpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyZW50eHR5cGUgPT09ICdncmlkJyB8fCBwYXJlbnR4dHlwZSA9PT0gJ2xvY2tlZGdyaWQnKSB7XG4gICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RyZWVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0ZXh0Y29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnY2hlY2tjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdkYXRlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAncm93bnVtYmVyZXInIHx8IGNoaWxkeHR5cGUgPT09ICdudW1iZXJjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdib29sZWFuY29sdW1uJyApIHtcbiAgICAgICAgcGFyZW50Q21wLmFkZENvbHVtbihjaGlsZENtcClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuICAgICAgICAgIC8vdmFyIGogPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VuaGFuZGxlZCBlbHNlIGluIGFkZFRoZUNoaWxkJylcbiAgICAgICAgY29uc29sZS5sb2cocGFyZW50eHR5cGUpXG4gICAgICAgIGNvbnNvbGUubG9nKGNoaWxkeHR5cGUpXG4gICAgICB9XG4gICAgfSBcbiAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2x0aXAnKSB7XG4gICAgICBwYXJlbnRDbXAuc2V0VG9vbHRpcChjaGlsZENtcClcbiAgICAgIHJldHVyblxuICAgIH0gXG4gICAgaWYgKGNoaWxkeHR5cGUgPT09ICdwbHVnaW4nKSB7XG4gICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKVxuICAgICAgcmV0dXJuXG4gICAgfSBcbiAgICBlbHNlIGlmIChcbiAgICAgIHBhcmVudHh0eXBlID09PSAnYnV0dG9uJyB8fCBcbiAgICAgIHBhcmVudHh0eXBlID09PSAnbWVudWl0ZW0nIHx8XG4gICAgICBwYXJlbnR4dHlwZSA9PT0gJ21lbnVjaGVja2l0ZW0nXG4gICAgICApIHtcbiAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnbWVudScpIHtcbiAgICAgICAgcGFyZW50Q21wLnNldE1lbnUoY2hpbGRDbXApXG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4gICAgICB9XG4gICAgfSBcbiAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInICYmIEV4dC5pc0NsYXNzaWMgPT09IHRydWUpIHtcbiAgICAgIHBhcmVudENtcC5hZGREb2NrZWRJdGVtcyhjaGlsZENtcClcbiAgICAgIHJldHVyblxuICAgIH0gXG4gICAgZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vdmFyIGo6IGFueSA9IHBhcmVudENtcC5pdGVtcy5pdGVtcy5sZW5ndGhcbiAgICAgICAgLy9wYXJlbnRDbXAuaW5zZXJ0KGogLSAxLCBjaGlsZENtcClcbiAgICAgICAgcGFyZW50Q21wLmluc2VydCgxLCBjaGlsZENtcClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9IFxuICAgICBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy9jb25zb2xlLmxvZyhgbmdPbkNoYW5nZXNgKVxuICAgIC8vY29uc29sZS5sb2coY2hhbmdlcylcbiAgICBsZXQgY2hhbmdlc01zZ3M6IHN0cmluZ1tdID0gW11cbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBsZXQgdmVyYiA9ICcnXG4gICAgICBpZiAoY2hhbmdlc1twcm9wTmFtZV0uZmlyc3RDaGFuZ2UgPT09IHRydWUpIHtcbiAgICAgICAgdmVyYiA9ICdpbml0aWFsaXplZCdcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2ZXJiID0gJ2NoYW5nZWQnXG4gICAgICB9XG4gICAgICBsZXQgdmFsID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlXG4gICAgICBpZiAodGhpcy5leHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBjYXBQcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSlcbiAgICAgICAgdmFyIHNldEZ1bmN0aW9uID0gJ3NldCcgKyBjYXBQcm9wTmFtZVxuICAgICAgICBpZiAodGhpcy5leHRbc2V0RnVuY3Rpb25dICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuZXh0W3NldEZ1bmN0aW9uXSh2YWwpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihzZXRGdW5jdGlvbiArICcgbm90IGZvdW5kIGZvciAnICsgdGhpcy5leHQueHR5cGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAodmVyYiA9PSAnY2hhbmdlZCcpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2hhbmdlIG5lZWRlZCBhbmQgZXh0IG5vdCBkZWZpbmVkJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hhbmdlc01zZ3MucHVzaChgJHtwcm9wTmFtZX0gJHt2ZXJifSB0byBcIiR7dmFsfVwiYClcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhgT25DaGFuZ2VzOiAke2NoYW5nZXNNc2dzLmpvaW4oJzsgJyl9YClcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHZhciBjaGlsZENtcFxuICAgIHZhciBwYXJlbnRDbXBcbiAgICB0cnkge1xuICAgICAgY2hpbGRDbXAgPSB0aGlzLmV4dFxuICAgICAgaWYgKHRoaXMuX2hvc3RDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnRDbXAgPSB0aGlzLl9ob3N0Q29tcG9uZW50LmV4dFxuICAgICAgICBpZihwYXJlbnRDbXAueHR5cGUgPT0gJ2J1dHRvbicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ21lbnUnKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnYnV0dG9uL21lbnUgbm90IGRlbGV0ZWQnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnY2Fyb3VzZWwnKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnY2Fyb3VzZWwgcGFyZW50IG5vdCBkZWxldGVkJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2dyaWQnICYmIGNoaWxkQ21wLnh0eXBlID09ICdjb2x1bW4nKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnZ3JpZC9jb2x1bW4gbm90IGRlbGV0ZWQnKVxuICAgICAgICAgIC8vY29uc29sZS5sb2coY2hpbGRDbXApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdzZWdtZW50ZWRidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICdidXR0b24nKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnc2VnbWVudGVkYnV0dG9uL2J1dHRvbiBub3QgZGVsZXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICd0b29sdGlwJykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J1dHRvbi90b29sdGlwIG5vdCBkZWxldGVkJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ3RpdGxlYmFyJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnYnV0dG9uJykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RpdGxlYmFyL2J1dHRvbiBub3QgZGVsZXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICd0aXRsZWJhcicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ3NlYXJjaGZpZWxkJykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RpdGxlYmFyL3NlYXJjaGZpZWxkIG5vdCBkZWxldGVkJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRDbXAucmVtb3ZlKFtjaGlsZENtcF0pXG4gICAgICAgICAgY2hpbGRDbXAuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoY2hpbGRDbXAgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2hpbGRDbXAuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ25vIGRlc3Ryb3knKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIGNvbnNvbGUubG9nKCcqKioqKicpXG4gICAgICBjb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICBjb25zb2xlLmxvZyhjaGlsZENtcClcbiAgICAgIGNvbnNvbGUubG9nKCcqKioqKicpXG4gICAgfVxuICB9XG5cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0RvQ2hlY2soKSB7Y29uc29sZS5sb2coYERvQ2hlY2tgKX1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlckNvbnRlbnRDaGVja2VkYCkgfVxuICAvL25nQWZ0ZXJWaWV3SW5pdCgpIHsgY29uc29sZS5sb2coYEFmdGVyVmlld0luaXRgKSB9XG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdBZnRlclZpZXdDaGVja2VkKCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3Q2hlY2tlZGApIH1cblxuXG4vLyAgICBtZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgICBpZiAoZXZlbnQubmFtZSAhPSAnZnVsbHNjcmVlbicpIHtcbi8vICAgICAgICAoPGFueT50aGlzKVtldmVudC5uYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuLy8gICAgICB9XG4vLyAgICAgIGVsc2Uge1xuLy8gICAgICAgICg8YW55PnRoaXMpW2V2ZW50Lm5hbWUgKyAnZXZlbnQnXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuLy8gICAgICB9XG4vLyAgICB9KVxuXG4vLyAgICBsZXQgZiA9IHRoaXMubmdPbkRlc3Ryb3k7XG4vLyAgICB0aGlzLm5nT25EZXN0cm95ID0gKCkgPT4ge1xuLy8gICAgICBmKCk7XG4vLyAgICAgIHRoaXMudW5zdWJzY3JpYmVBbGwoKTtcbi8vICAgIH07XG5cbiAgLy9wcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbi8vICAgIHByb3RlY3RlZCBzYWZlU3Vic2NyaXB0aW9uIChzdWI6IFN1YnNjcmlwdGlvbik6IFN1YnNjcmlwdGlvbiB7XG4vLyAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goc3ViKTtcbi8vICAgICAgICByZXR1cm4gc3ViO1xuLy8gICAgfVxuIFxuLy8gICAgcHJpdmF0ZSB1bnN1YnNjcmliZUFsbCgpIHtcbi8vICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbi8vICAgICAgICAgICAgIWVsZW1lbnQuaXNVbnN1YnNjcmliZWQgJiYgZWxlbWVudC51bnN1YnNjcmliZSgpO1xuLy8gICAgICAgIH0pO1xuLy8gICAgfVxuXG59Il19