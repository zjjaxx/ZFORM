export default {
    getParentByName(vm,name){
       let parent=vm.$parent
       while(parent&&parent.$options.name!=name){
            parent=parent.$parent
       } 
       return parent
    },
    getChildrenByName(vm,name){
        let children=vm.$children
        let childrenGroup=[]
        children.forEach(child => {
            if(child.$options.name==name&& child.prop){
                childrenGroup.push(child)
            }
            else if(child.$children){
                let childrenList=this.getChildrenByName(child,name)
                childrenGroup=[...childrenGroup,...childrenList]
            }
        });
        return childrenGroup
    }
}