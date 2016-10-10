({
    doInit : function(component, event, helper) {
       
    },
    addRow: function(component,event, helper)
    {
       	var experienceList = component.get('v.experienceList');
        var today = new Date();  
        debugger;
       /* var experience ={Technology:'',
                         From:'today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate()',
                         To:today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate(),
                         Total:0
                        };*/
        var experience ={Technology:'',
                         From:'',
                         To:'',
                         Total:0
                        };
        
    	experienceList.push(experience);
    	component.set('v.experienceList',experienceList);    
    },
    deleteRow:function(component,event,helper)
    {
        debugger;
        var index = event.getParam('idx');
        var experienceList = component.get('v.experienceList');
        experienceList.splice(index,1);
        component.set('v.experienceList',experienceList);
        helper.calculateExpHelper(component);
    },
    calculateExp:function(component,event,helper)
    {
        debugger;
        var experienceList = component.get('v.experienceList');
        var index = event.getParam('idx');
        var exp = event.getParam('exp');
        experienceList[index] = exp;
        helper.calculateExpHelper(component);
        
    }
})