export function toggleArrayItem(list,item){
    if (list.includes(item)){
        return list.filter((x)=>x !== item);
    }

        return[...list,item]
}