window._code = {
	"Button": {
		"Button.ts": "declare var Ext: any;\nimport { Component, ChangeDetectorRef } from '@angular/core';\n@Component({\n  selector: 'button-component',\n  templateUrl: \"./Button.html\",\n  styles: [``]\n})\nexport class ButtonComponent  {\n\n  style = 'Menu';\n  type = 'Text';\n  round = false;\n  iconCls:string;\n  text = true;\n  ui:string;\n  menu = true;\n  isPhone = Ext.os.is.Phone;\n\n  menuButtons = [];\n\n  constructor(private cd: ChangeDetectorRef) {};\n\n  menuButtonReady = function(event) {\n    this.menuButtons.push(event.cmp);\n  }\n\n  onStyleChange = (item) => {\n    this.style = item._text;\n    if (this.style === 'Menu') {\n      this.menu = true;\n      var tempMenu = Ext.create('Ext.menu.Menu');\n      var item1 = new Ext.menu.Item({\n        indented: false,\n        text: \"Item 1\"\n      });\n      var item2 = new Ext.menu.Item({\n        indented: false,\n        text: \"Item 2\"\n      });\n      var item3 = new Ext.menu.Item({\n        indented: false,\n        text: \"Item 3\"\n      });\n      tempMenu.add(item1);\n      tempMenu.add(item2);\n      tempMenu.add(item3);\n      this.menuButtons.forEach(button => {\n        button.setMenu(tempMenu);\n      });\n    } else {\n        this.ui = this.style.toLowerCase();\n        this.menu=false;\n        this.menuButtons.forEach(button => {\n          button.setMenu(null);\n        });\n    }\n  }\n\n  onTypeChange = (item) => {\n    this.type = item._text;\n    this.iconCls = this.type.indexOf('Icon') !== -1 ? 'x-fa fa-heart' : null;\n    this.text = this.type.indexOf('Text') !== -1;\n  }\n\n  toggleRound = function(){\n    this.round=!this.round;\n    if (this.round) {\n      this.ui += ' round';\n    }\n    else {\n      this.ui = this.ui.replace(' round', '');\n    }\n    this.cd.detectChanges();\n  };\n\n  styleChangeDefaults = { handler: this.onStyleChange };\n  typeChangeDefaults = { handler: this.onTypeChange };\n\n  layoutPropsVal = Ext.os.is.Phone ? {\n    height: '100%',\n    width: '100%',\n    className: 'demo-buttons',\n    defaults: {\n      margin: '20'\n    }\n  } : {\n      padding: 10,\n      shadow: true,\n      defaults: {\n        layout: 'hbox',\n        flex: 1,\n        margin: '10',\n        width: '100%'\n      }\n    }\n\n  buttonGroupPropsVal = Ext.os.is.Phone ? {\n    padding: '20 0 0 20',\n    defaults: {\n      margin: '0 20 20 0',\n      width: 'calc(50% - 20px)',\n    }\n  } : {\n      padding: '17 0 17 20',\n      layout: { type: 'hbox', align: 'middle', pack: 'space-around' },\n      flex: 1,\n      margin: '0 20 0 0',\n      width: 400,\n      defaults: {\n        margin: '0 20 0 0'\n      }\n    }\n\n  groupLabelPropsVal = Ext.os.is.Phone ? {\n    style: {\n      margin: '0 0 5px 0'\n    }\n  } : {\n      style: {\n        width: '70px',\n        textAlign: 'right',\n        margin: '24px 20px 0 0'\n      }\n    };\n\n}",
		"Button.html": "<ExtContainer padding=\"10px\" layout=\"vbox\" [width]=\"600\">\n\n  <ExtContainer\n    [layout]=\"{ type: 'hbox', pack: isPhone ? 'center' : 'left'}\"\n    margin=\"0 0 10 0\"\n    [defaults]=\"{ margin: '0 10 0 0' }\">\n    <ExtButton ui=\"action raised\" text=\"Style\">\n      <ExtMenu [defaults]=\"styleChangeDefaults\">\n        <ExtMenuitem text=\"None\"    value=\"\"        [iconCls]=\"style === 'None'?'x-font-icon md-icon-check':''\"></ExtMenuitem>\n        <ExtMenuitem text=\"Action\"  value=\"action\"  [iconCls]=\"style === 'Action'?'x-font-icon md-icon-check':''\"></ExtMenuitem>\n        <ExtMenuitem text=\"Decline\" value=\"decline\" [iconCls]=\"style === 'Decline'?'x-font-icon md-icon-check':''\"></ExtMenuitem>\n        <ExtMenuitem text=\"Confirm\" value=\"confirm\" [iconCls]=\"style === 'Confirm'?'x-font-icon md-icon-check':''\"></ExtMenuitem>\n        <ExtMenuitem text=\"Menu\"    value=\"menu\"    [iconCls]=\"style === 'Menu'?'x-font-icon md-icon-check':''\"></ExtMenuitem>\n      </ExtMenu>\n    </ExtButton>\n    <ExtButton ui=\"action raised\" text=\"Type\">\n      <ExtMenu [defaults]=\"typeChangeDefaults\">\n        <ExtMenuitem text=\"Text\" value=\"text\" [iconCls]=\"type === 'Text'?'x-font-icon md-icon-check':''\"></ExtMenuitem>\n        <ExtMenuitem text=\"Icon\" value=\"icon\" [iconCls]=\"type === 'Icon'?'x-font-icon md-icon-check':''\"></ExtMenuitem>\n        <ExtMenuitem text=\"Text Icon\" value=\"texticon\" [iconCls]=\"type === 'Text Icon'?'x-font-icon md-icon-check':''\"></ExtMenuitem>\n      </ExtMenu>\n    </ExtButton>\n    <ExtButton ui=\"action raised\" [iconCls]=\"round?'x-fa fa-check':null\" [enableToggle]=\"true\" text=\"Round\" (tap)=\"toggleRound()\"></ExtButton>\n  </ExtContainer>\n\n  <ExtPanel #layoutProps padding=\"10\" [shadow]=\"true\" [defaults]=\"{layout: 'hbox', flex:'1', margin: '10', width: '100%'}\">\n    <ExtContainer layout=\"hbox\">\n      <ExtContainer layout=\"hbox\">\n        <div #extitem flex=\"1\" #groupLabelProps1 style=\"text-align:right;margin:24px 20px 0 0;width: 100px\">Default</div>\n      </ExtContainer>\n      <ExtContainer flex=\"3\" [cls]=\"'button-group'\" #buttonGroupProps1 padding= '17 0 17 20' [layout]=\"{ type: 'hbox', align: 'middle', pack: 'space-around' }\" flex='1' margin='0 20 0 0' width=400 [defaults]=\"{margin: '0 20 0 0'}\">\n        <ExtButton [text]=\"text? 'Normal' : '' \"  [ui]=\"ui\" [iconCls]=\"iconCls\" arrowAlign=\"bottom\" (ready)=\"menuButtonReady($event)\">\n          <ExtMenu [hidden]=\"menu\" [indented]=\"false\">\n            <ExtMenuitem text=\"Item 1\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 2\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 3\"></ExtMenuitem>\n          </ExtMenu>\n        </ExtButton>\n        <ExtButton [text]=\"text? 'Badge' : ''\" [ui]=\"ui\" [iconCls]=\"iconCls\" badgeText=\"2\" (ready)=\"menuButtonReady($event)\">\n          <ExtMenu [hidden]=\"menu\" [indented]=\"false\">\n            <ExtMenuitem text=\"Item 1\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 2\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 3\"></ExtMenuitem>\n          </ExtMenu>\n        </ExtButton>\n        <ExtButton [text]=\"text? 'Disabled': '' \" [ui]=\"ui\" [iconCls]=\"iconCls\" [disabled]=\"true\" (ready)=\"menuButtonReady($event)\">\n          <ExtMenu [hidden]=\"menu\" [indented]=\"false\">\n            <ExtMenuitem text=\"Item 1\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 2\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 3\"></ExtMenuitem>\n          </ExtMenu>\n        </ExtButton>\n      </ExtContainer>\n    </ExtContainer>\n    <ExtContainer layout=\"hbox\">\n      <ExtContainer layout=\"hbox\">\n        <div #extitem flex=\"1\" #groupLabelProps2 width='70px' style=\"text-align:right;margin:24px 20px 0 0;width: 100px\">Alt</div>\n      </ExtContainer>\n      <ExtContainer flex=\"3\" [cls]=\"'button-group button-group-alt'\" #buttonGroupProps2 padding= '17 0 17 20' [layout]=\"{ type: 'hbox', align: 'middle', pack: 'space-around' }\" flex='1' margin='0 20 0 0' width=400 [defaults]=\"{margin: '0 20 0 0'}\">\n        <ExtButton [text]=\"text?  'Normal': ''\" [ui]=\"ui + ' alt'\" [iconCls]=\"iconCls\" (ready)=\"menuButtonReady($event)\">\n          <ExtMenu [hidden]=\"menu\" [indented]=\"false\">\n            <ExtMenuitem text=\"Item 1\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 2\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 3\"></ExtMenuitem>\n          </ExtMenu>\n        </ExtButton>\n        <ExtButton [text]=\"text?  'Badge' : ''\" [ui]=\"ui + ' alt'\" [iconCls]=\"iconCls\" badgeText=\"2\" (ready)=\"menuButtonReady($event)\">\n          <ExtMenu [hidden]=\"menu\" [indented]=\"false\" >\n            <ExtMenuitem text=\"Item 1\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 2\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 3\"></ExtMenuitem>\n          </ExtMenu>\n        </ExtButton>\n        <ExtButton [text]=\"text?  'Disabled' : ''\" [ui]=\"ui + ' alt'\" [iconCls]=\"iconCls\" [disabled]=\"true\" (ready)=\"menuButtonReady($event)\">\n          <ExtMenu [hidden]=\"menu\" [indented]=\"false\">\n            <ExtMenuitem text=\"Item 1\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 2\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 3\"></ExtMenuitem>\n          </ExtMenu>\n        </ExtButton>\n      </ExtContainer>\n    </ExtContainer>\n    <ExtContainer layout=\"hbox\">\n      <ExtContainer layout=\"hbox\">\n        <div #extitem flex=\"1\" #groupLabelProps3 style=\"text-align:right;margin:24px 20px 0 0;width: 100px\">Raised</div>\n      </ExtContainer>\n      <ExtContainer flex=\"3\" [cls]=\"'button-group'\" #buttonGroupProps3 padding= '17 0 17 20' [layout]=\"{ type: 'hbox', align: 'middle', pack: 'space-around' }\" flex='1' margin='0 20 0 0' width=400 [defaults]=\"{margin: '0 20 0 0'}\">\n        <ExtButton [text]=\"text?  'Normal' : ''\"  [ui]=\"ui + ' raised'\" [iconCls]=\"iconCls\" (ready)=\"menuButtonReady($event)\">\n          <ExtMenu [hidden]=\"menu\" [indented]=\"false\">\n            <ExtMenuitem text=\"Item 1\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 2\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 3\"></ExtMenuitem>\n          </ExtMenu>\n        </ExtButton>\n        <ExtButton [text]=\"text?  'Badge' : ''\" [ui]=\"ui + ' raised'\" [iconCls]=\"iconCls\" badgeText=\"2\" (ready)=\"menuButtonReady($event)\">\n          <ExtMenu  [hidden]=\"menu\" [indented]=\"false\">\n            <ExtMenuitem text=\"Item 1\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 2\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 3\"></ExtMenuitem>\n          </ExtMenu>\n        </ExtButton>\n        <ExtButton [text]=\"text?  'Disabled': '' \" [ui]=\"ui + ' raised'\" [iconCls]=\"iconCls\" [disabled]=\"true\" (ready)=\"menuButtonReady($event)\">\n          <ExtMenu [hidden]=\"menu\" [indented]=\"false\">\n            <ExtMenuitem text=\"Item 1\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 2\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 3\"></ExtMenuitem>\n          </ExtMenu>\n        </ExtButton>\n      </ExtContainer>\n    </ExtContainer>\n    <ExtContainer layout=\"hbox\">\n      <ExtContainer layout=\"hbox\">\n        <div #extitem flex=\"1\" #groupLabelProps4 style=\"text-align:right;margin:24px 20px 0 0;width: 100px\">Alt Raised</div>\n      </ExtContainer>\n      <ExtContainer flex=\"3\" [cls]=\"'button-group button-group-alt'\" #buttonGroupProps4 padding= '17 0 17 20' [layout]=\"{ type: 'hbox', align: 'middle', pack: 'space-around' }\" flex='1' margin='0 20 0 0' width=400 [defaults]=\"{margin: '0 20 0 0'}\">\n        <ExtButton [text]=\"text?  'Normal' : '' \" [ui]=\"ui + ' alt raised'\" [iconCls]=\"iconCls\" (ready)=\"menuButtonReady($event)\">\n          <ExtMenu [hidden]=\"menu\" [indented]=\"false\">\n            <ExtMenuitem text=\"Item 1\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 2\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 3\"></ExtMenuitem>\n          </ExtMenu>\n        </ExtButton>\n        <ExtButton [text]=\"text?  'Badge': '' \" [ui]=\"ui + ' alt raised'\" [iconCls]=\"iconCls\" badgeText=\"2\" (ready)=\"menuButtonReady($event)\">\n          <ExtMenu [hidden]=\"menu\"  [indented]=\"false\">\n            <ExtMenuitem text=\"Item 1\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 2\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 3\"></ExtMenuitem>\n          </ExtMenu>\n        </ExtButton>\n        <ExtButton [text]=\"text?  'Disabled' : ''\" [ui]=\"ui + ' alt raised'\" [iconCls]=\"iconCls\" [disabled]=\"true\" (ready)=\"menuButtonReady($event)\">\n          <ExtMenu [hidden]=\"menu\" [indented]=\"false\">\n            <ExtMenuitem text=\"Item 1\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 2\"></ExtMenuitem>\n            <ExtMenuitem text=\"Item 3\"></ExtMenuitem>\n          </ExtMenu>\n        </ExtButton>\n      </ExtContainer>\n    </ExtContainer>\n  </ExtPanel>\n\n</ExtContainer>\n"
	},
	"SegmentedButton": {
		"SegmentedButton.ts": "declare var Ext: any;\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'segmented-button-component',\n  templateUrl: './SegmentedButton.html',\n  styles: [``]\n})\nexport class SegmentedButtonComponent {\n\n  button1: string = 'low';\n  button2: string = 'low';\n  isPhone = Ext.os.is.Phone;\n  top = !this.isPhone ? '10' : null\n  left = !this.isPhone ? '10' : null\n  width = !this.isPhone ? '400' : null\n  height = !this.isPhone ? '600' : null\n\n  onButton1Change = function(event){\n    this.button1 = event.value; \n  }\n\n  onButton2Change = function(event){\n    this.button2 = event.value; \n  }\n\n}",
		"SegmentedButton.html": "<ExtContainer padding=\"10\" layout=\"fit\" [fitToParent]=\"true\">\n\n\n<ExtPanel [shadow]=\"true\" [top]=\"top\" [left]=\"left\" [width]=\"width\" [height]=\"height\">\n\n  <ExtToolbar [shadow]=\"false\">\n    <ExtContainer style=\"margin-right: 10px;\" html=\"Default UI:\"></ExtContainer>\n    <ExtSegmentedbutton (change)=\"onButton1Change($event)\">\n      <ExtButton [value]=\"'low'\"    [text]=\"'Low'\"></ExtButton>\n      <ExtButton [value]=\"'medium'\" [text]=\"'Medium'\"></ExtButton>\n      <ExtButton [value]=\"'high'\"   [text]=\"'High'\"></ExtButton>\n    </ExtSegmentedbutton>\n  </ExtToolbar>\n\n  <ExtToolbar [shadow]=\"false\">\n    <ExtContainer style=\"margin-right: 10px;\" html=\"Toolbar UI:\"></ExtContainer>\n    <ExtSegmentedbutton\n      [defaultUI]=\"'toolbar-default'\"\n      (change)=\"onButton2Change($event)\">\n      <ExtButton [value]=\"'low'\"    [text]=\"'Low'\"></ExtButton>\n      <ExtButton [value]=\"'medium'\" [text]=\"'Medium'\"></ExtButton>\n      <ExtButton [value]=\"'high'\"   [text]=\"'High'\"></ExtButton>\n    </ExtSegmentedbutton>\n  </ExtToolbar>\n\n</ExtPanel>\n</ExtContainer>"
	},
	"SplitButton": {
		"SplitButton.ts": "declare var Ext: any;\nimport { Component, ChangeDetectorRef } from '@angular/core';\n\n@Component({\n  selector: 'split-button-component',\n  templateUrl: './SplitButton.html',\n  styles: [``]\n})\nexport class SplitButtonComponent {\n\n  isPhone = Ext.os.is.Phone;\n  style = 'None';\n  type = 'Text';\n  round = false;\n  iconCls:string;\n  text = true;\n  ui:string;\n  menu = true;\n\n  constructor(private cd: ChangeDetectorRef) {};\n\n  onStyleChange = (item) => {\n    this.style = item._text;\n    if (this.style === 'Menu') {\n      this.menu = true;\n    } else {\n        this.ui = this.style.toLowerCase();\n        this.menu=false;\n    }\n    this.cd.detectChanges();\n  }\n\n  onTypeChange = (item) => {\n    this.type = item._text;\n    this.iconCls = this.type.indexOf('Icon') !== -1 ? 'x-fa fa-heart' : null;\n    this.text = this.type.indexOf('Text') !== -1;\n  }\n\n  toggleRound = function(){\n    this.round=!this.round;\n    if (this.round) {\n      this.ui += ' round';\n    }\n    else {\n      this.ui = this.ui.replace(' round', '');\n    }\n    this.cd.detectChanges();\n  };\n\n  menuProp =  [{\n      text: 'Menu Item 1'\n  }, {\n      text: 'Menu Item 2'\n  }, {\n      text: 'Menu Item 3'\n  }];\n\n layoutProps = Ext.os.is.Phone ? {\n    height: '100%',\n    width: '100%',\n    className: 'demo-buttons',\n    defaults: {\n        margin: '20'\n    }\n  } : {\n    padding: 10,\n    shadow: true,\n    defaults: {\n        layout: 'hbox',\n        flex: 1,\n        margin: '10',\n        width: '100%'\n    }\n  }\n\n  buttonGroupProps = Ext.os.is.Phone ? {\n    padding: '20 0 0 20',\n    defaults: {\n        margin: '0 20 20 0',\n    }\n  } : {\n    padding: '17 0 17 20',\n    layout: { type: 'hbox', align: 'middle', pack: 'space-around' },\n    flex: 1,\n    margin: '0 20 0 0',\n    width: 400,\n    defaults: {\n        margin: '0 20 0 0'\n    }\n  }\n\n  groupLabelProps = Ext.os.is.Phone ? {\n    style: {\n        margin: '0 0 5px 0'\n    }\n  } : {\n    style: {\n        width: '70px',\n        textAlign: 'right',\n        margin: '24px 20px 0 0'\n    }\n  };\n\n}",
		"SplitButton.html": "<ExtContainer padding=\"10\" [width]=\"600\">\n\n    <!-- , group: 'buttonstyle'\n    , group: 'buttontype' -->\n\n  <ExtContainer\n    [layout]=\"{ type: 'hbox', pack: isPhone ? 'center' : 'left'}\"\n    [margin]=\"'0 0 10 0'\"\n    [defaults]=\"{ margin: '0 10 0 0' }\"\n    [width]=\"550\">\n    <ExtButton [ui]=\"'action raised'\" text=\"Style\">\n      <ExtMenu [defaults]=\"{ handler: this.onStyleChange }\">\n        <ExtMenuitem text=\"None\" value=\"\" [iconCls]=\"style === 'None'?'x-font-icon md-icon-check':''\"></ExtMenuitem>\n        <ExtMenuitem text=\"Action\" value=\"action\" [iconCls]=\"style === 'Action'?'x-font-icon md-icon-check':''\"></ExtMenuitem>\n        <ExtMenuitem text=\"Decline\" value=\"decline\" [iconCls]=\"style === 'Decline'?'x-font-icon md-icon-check':''\"></ExtMenuitem>\n        <ExtMenuitem text=\"Confirm\" value=\"confirm\" [iconCls]=\"style === 'Confirm'?'x-font-icon md-icon-check':''\"></ExtMenuitem>\n      </ExtMenu>\n    </ExtButton>\n    <ExtButton [ui]=\"'action raised'\" text=\"Type\">\n      <ExtMenu [defaults]=\"{ handler: this.onTypeChange}\">\n        <ExtMenuitem text=\"Text\" value=\"Text\" [iconCls]=\"type === 'Text'?'x-font-icon md-icon-check':''\"></ExtMenuitem>\n        <ExtMenuitem text=\"Icon\" value=\"Icon\" [iconCls]=\"type === 'Icon'?'x-font-icon md-icon-check':''\"></ExtMenuitem>\n        <ExtMenuitem text=\"Text & Icon\" value=\"Text & Icon\" [iconCls]=\"type === 'Text & Icon'?'x-font-icon md-icon-check':''\"></ExtMenuitem>\n      </ExtMenu>\n    </ExtButton>\n    <ExtButton [ui]=\"'action raised'\" [iconCls]=\"round ? 'x-fa fa-check' : null\" [enableToggle]=\"true\" text=\"Round\" (tap)=\"toggleRound()\"></ExtButton>\n  </ExtContainer>\n\n  <ExtPanel #layoutProps [padding]=\"10\" [shadow]=\"true\" [defaults]=\"{layout: 'hbox', flex:'1', margin: '10', width: '100%'}\">\n\n    <ExtContainer layout=\"hbox\">\n      <ExtContainer layout=\"hbox\" html=\"<div #groupLabelProps1 style='tExtAlign:right;margin:24px 20px 0 0;width: 100px'>Default</div>\"></ExtContainer>\n      <ExtContainer [flex]=\"3\" cls=\"button-group\" #buttonGroupProps1 padding= '17 0 17 20' [layout]=\"{ type: 'hbox', align: 'middle', pack: 'space-around' }\" flex='1' margin='0 20 0 0' width=400 [defaults]=\"{margin: '0 20 0 0'}\">\n        <ExtSplitbutton [text]=\"text? 'Normal' : ''\"  [ui]=\"ui\" [iconCls]=\"iconCls\" [menu]=\"menuProp\" [arrowAlign]=\"'bottom'\"></ExtSplitbutton>\n        <ExtSplitbutton [text]=\"text? 'Disabled' : ''\"  [ui]=\"ui\" [iconCls]=\"iconCls\" [disabled]=\"true\" [menu]=\"menuProp\"></ExtSplitbutton>\n      </ExtContainer>\n    </ExtContainer>\n\n    <ExtContainer layout=\"hbox\">\n      <ExtContainer layout=\"hbox\" html=\"<div #groupLabelProps1 style='tExtAlign:right;margin:24px 20px 0 0;width: 100px'>All</div>\"></ExtContainer>\n      <ExtContainer [flex]=\"3\" cls=\"button-group button-group-alt\" #buttonGroupProps1 padding= '17 0 17 20' [layout]=\"{ type: 'hbox', align: 'middle', pack: 'space-around' }\" flex='1' margin='0 20 0 0' width=400 [defaults]=\"{margin: '0 20 0 0'}\">\n        <ExtSplitbutton [text]=\"text ?'Normal' : ''\" [ui]=\"ui + ' alt'\" [iconCls]=\"iconCls\" [menu]=\"menuProp\"></ExtSplitbutton>\n        <ExtSplitbutton [text]=\"text ? 'Disabled' : ''\" [ui]=\"ui + ' alt'\" [iconCls]=\"iconCls\" [disabled]=\"true\" [menu]=\"menuProp\"></ExtSplitbutton>\n      </ExtContainer>\n    </ExtContainer>\n\n    <ExtContainer layout=\"hbox\">\n      <ExtContainer layout=\"hbox\" html=\"<div #groupLabelProps1 style='tExtAlign:right;margin:24px 20px 0 0;width: 100px'>Raised</div>\"></ExtContainer>\n      <ExtContainer [flex]=\"3\" cls=\"button-group\" #buttonGroupProps1 padding= '17 0 17 20' [layout]=\"{ type: 'hbox', align: 'middle', pack: 'space-around' }\" flex='1' margin='0 20 0 0' width=400 [defaults]=\"{margin: '0 20 0 0'}\">\n        <ExtSplitbutton [text]=\"text ? 'Normal': ''\" [ui]=\"ui + ' raised'\" [iconCls]=\"iconCls\" [menu]=\"menuProp\"></ExtSplitbutton>\n        <ExtSplitbutton [text]=\"text? 'Disabled' : ''\" [ui]=\"ui + ' raised'\" [iconCls]=\"iconCls\" [disabled]=\"true\" [menu]=\"menuProp\"></ExtSplitbutton>\n      </ExtContainer>\n    </ExtContainer>\n\n    <ExtContainer layout=\"hbox\">\n      <ExtContainer layout=\"hbox\" html=\"<div #groupLabelProps1 style='tExtAlign:right;margin:24px 20px 0 0;width: 100px'>Alt Raised</div>\"></ExtContainer>\n      <ExtContainer [flex]=\"3\" cls=\"button-group button-group-alt\" #buttonGroupProps1 padding= '17 0 17 20' [layout]=\"{ type: 'hbox', align: 'middle', pack: 'space-around' }\" flex='1' margin='0 20 0 0' width=400 [defaults]=\"{margin: '0 20 0 0'}\">\n        <ExtSplitbutton [text]=\"text ? 'Normal' : ''\" [ui]=\"ui + ' alt raised'\" [iconCls]=\"iconCls\" [menu]=\"menuProp\"></ExtSplitbutton>\n        <ExtSplitbutton [text]=\"text? 'Disabled' : ''\" [ui]=\"ui + ' alt raised'\" [iconCls]=\"iconCls\" [disabled]=\"true\" [menu]=\"menuProp\" ></ExtSplitbutton>\n      </ExtContainer>\n    </ExtContainer>\n\n  </ExtPanel>\n\n</ExtContainer>"
	}
}