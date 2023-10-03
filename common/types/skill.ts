export type skillCategory = 'fe'|'be'|'lang'|'tool'|'misc'|'fs'|'lib'|'fw'|'db'|'sv'
export type mastery = 'Expert'|'Good'|'Average'|'Minimum'
export type usage = 'Primary'|'Secondary'|'Hobby'|'Rarely'|'Sometimes'

export interface SKILL_INTERFACE {
    title:string,
    icon:string,
    info:string
    category:skillCategory[]
    mastery:mastery
    usage:usage
    isShow:boolean,
    isShowInDashboard:boolean
}