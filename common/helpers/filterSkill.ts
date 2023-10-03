import { initialFilterState } from "@/context/filter/filter"
import { SKILL_INTERFACE } from "../types/skill"; 
import { haveCommonValue } from "./haveCommonValue";

const filterSkill = (skills:SKILL_INTERFACE[],filterObj:initialFilterState):SKILL_INTERFACE[] => {

    const { category, keyword } = filterObj;

    const newList:SKILL_INTERFACE[] = [];

    if((category.length === 0) && !keyword){
        return skills
    } else if (category.length === 0 && keyword){
        skills.forEach((skill,index) => {
            if(skill.title.toLowerCase().includes(keyword.toLowerCase())){
                newList.push(skill)
            }
        })
    } else {
        skills.forEach((skill,index) => {
            if(skill.title.toLowerCase().includes(keyword.toLowerCase()) && haveCommonValue(skill.category,category)){
                newList.push(skill)
            }
        })
    }
    return newList
}

export default filterSkill