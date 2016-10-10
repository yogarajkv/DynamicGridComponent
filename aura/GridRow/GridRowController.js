({
    doInit:function(component,event,helper)
    {
     // component.find('fromdate').addHandler('change',component,'c.dateChange');
    },
    dateChange :function(component,event,helper)
    {
        debugger;        
        var exp = component.get('v.exp');
        var today = new Date();
        var todateComp = component.find('todate');
        var fromdateComp = component.find('fromdate');
        todateComp.set('v.errors',null);
        fromdateComp.set('v.errors',null);
        if(exp.To){
            var todate = new Date(exp.To);
            if (todate.getFullYear()>today.getFullYear())
            {
                todateComp.set('v.errors',[{message:"To Year should be lesser than current Year"}]);               
                return;
            }
        }
        if(exp.From)
        {
            var fromdate = new Date(exp.From);
            if (fromdate.getFullYear()>today.getFullYear())
            {
                fromdateComp.set('v.errors',[{message:"From Year should be lesser than current Year"}]);               
                return;
            }
        }
        if(exp.From && exp.To)
        {
            var fromdate = new Date(exp.From);
            var todate = new Date(exp.To);
            
            exp.Total = todate.getFullYear()-fromdate.getFullYear(); 
            if (exp.Total<0){                   
                todateComp.set('v.errors',[{message:"From Year should be lesser than To Year"}]);
                exp.Total = 0;
                return;
            }            
            component.set('v.exp',exp);
            var event = component.getEvent("dateChangeEvent");
            event.setParams({
                "idx":component.get('v.index'),
                "exp":component.get('v.exp')
            });
            event.fire();
        }
        
    },
    validateText:function(component,event,helper){
        debugger;
        var textComp = component.find('techtext');
        if($A.util.isEmpty(textComp.get('v.value')))
        {
            debugger;
            textComp.set('v.errors',[{message:"Technology is Required"}]); 
        }
        else
        {
            textComp.set('v.errors',null);
            var event = component.getEvent("dateChangeEvent");
            event.setParams({
                "idx":component.get('v.index'),
                "exp":component.get('v.exp')
            });
            event.fire();
        }
    },
    deleteRow:function(component,event,helper)
    {
        var event = component.getEvent("deleteRowEvent");
        event.setParams({
            "idx":component.get('v.index')
        });
        event.fire();
    }
})