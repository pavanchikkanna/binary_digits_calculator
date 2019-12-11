var output_element=document.getElementById('box')
        function calculator(val){
            if(val=='c')
            output_element.value=""
            else if(val=='=')
            {   expr=output_element.value
                expr=expr.replace(/[0-1]+/g,function(e){
                    return parseInt(e,2)
                })
                output_element.value=eval(expr).toString(2)
            }
            else
            output_element.value=output_element.value+val   
        }