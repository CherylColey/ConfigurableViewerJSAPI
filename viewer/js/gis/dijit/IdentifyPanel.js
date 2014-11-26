define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./IdentifyPanel/templates/IdentifyPanel.html',
    //'dojo/dom-construct',
   // 'dijit/form/Button',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/dom-style'
    //'xstyle/css!./IdentifyPanel/css/IdentifyPanel.css'
    
    
    //'dojo/on'
], function(declare, lang,  _WidgetBase, _TemplatedMixin, template, _WidgetsInTemplateMixin,
 domStyle) {
 
    return declare([_WidgetBase, _TemplatedMixin,_WidgetsInTemplateMixin], {
        widgetsInTemplate: true,
        templateString: template,
        allowPopup: false,
        postCreate: function() {
        this.inherited(arguments);
        this.initializeSidebar();
        domStyle.set(this.pagerNode,'display','none');
        this.featureNode.innerHTML = 'Click to select a feature';        
        this.map.on('layer-add', lang.hitch(this,function(event){
            //names from find widget, clears out panel when find runs
            if (event.layer.id ==='findGraphics_polygon'||event.layer.id === 'findGraphics_line'||event.layer.id ==='findGraphics_point'){
            event.layer.on('graphics-clear', lang.hitch(this, this.clearPanel));
        }
        }));

        this.startup();


        },
      displayPopupContent: function (feature){
                this.identifyPanelNode.innerHTML = '';                
                if(feature){
                    
                    this.featureNode.innerHTML = this.map.infoWindow.features.length + ' features currently selected';
                    var content = feature.getContent();
                    console.log(content);
                    this.identifyPanelNode.set('content',content);
                    lang.hitch(this,function() {
                        this.resize();
                    });
                }
                else{
                    this.featureNode.innerHTML = 'Click to select a feature';
                    this.identifyPanelNode.set('content',null);
                }
            },

            selectPrevious: function (){
                this.map.infoWindow.selectPrevious();
            },

            selectNext: function (){
                this.map.infoWindow.selectNext();
            },

            clearPanel: function (){

                this.featureNode.innerHTML = 'Click to select a feature';
                this.identifyPanelNode.set('content',null);

            },

            initializeSidebar: function(){
                //when the selection changes update the side panel to display the popup info for the 
                //currently selected feature. 
        
            if (this.allowPopup === true) {
                    this.map.infoWindow.popupWindow = true;
                }
                else{
                    this.map.infoWindow.popupWindow = false;
                }
            

                this.map.infoWindow.on('selection-change', lang.hitch(this,function(){
                    this.displayPopupContent(this.map.infoWindow.getSelectedFeature());
                }));

                //when the selection is cleared remove the popup content from the side panel. 
                this.map.infoWindow.on('clear-features', lang.hitch(function(){
                    // //dom.byId replaces dojo.byId
                    // dom.byId('featureCount').innerHTML = 'Click to select feature(s)';
                    // //registry.byId replaces dijit.byId
                    // registry.byId('leftPane').set('content', '');
                    // domUtils.hide(dom.byId('pager'));
                    //this.featureNode.innerHTML = 'Click to select a feature';
                    //this.identifyPanelNode.set('content',null);
                    console.log('executed!');
                }));

                //When features are associated with the  map's info window update the sidebar with the new content. 
                this.map.infoWindow.on('set-features', lang.hitch(this, function(){
                    this.displayPopupContent(this.map.infoWindow.getSelectedFeature());

                    if(this.map.infoWindow.features && this.map.infoWindow.features.length > 1) {
                        domStyle.set(this.pagerNode,'display','inline');
                        this.featureCount = this.map.infoWindow.features.length;
                        }
                        else{
                           domStyle.set(this.pagerNode,'display','none'); 
                        } 
                }));
                                        // dom.byId('featureCount').innerHTML = popup.features.length + ' feature(s) selected';

                    // //enable navigation if more than one feature is selected 

               
            },
            setMapClickMode: function(mode) {
                this.mapClickMode.current = mode;
            }

        
    });
});
