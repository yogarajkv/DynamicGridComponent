({
    calculateExpHelper : function(component) {
        var experienceList= component.get('v.experienceList');        
        var startYear;
        var endYear;
        for(var i=0;i<experienceList.length;i++)
        {
            var from = new Date(experienceList[i].From);
            var to = new Date(experienceList[i].To);
            if(!startYear && !endYear){
                startYear = from;
                endYear = to;
            }
            else
            {
                if(from.getFullYear()<startYear.getFullYear()){
                    startYear = from;
                }
                if(to.getFullYear()>endYear.getFullYear()){
                    endYear = to;
                }
            }                        
        }
        component.find('totalyears').set('v.value',endYear.getFullYear()- startYear.getFullYear());
        
    }
})