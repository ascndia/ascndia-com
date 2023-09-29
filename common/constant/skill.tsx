export type skillCategory = 'fe'|'be'|'lang'|'tool'|'misc'|'fs'|'lib'|'fw'|'db'|'sv'
type mastery = 'Expert'|'Good'|'Average'|'Minimum'
type usage = 'Primary'|'Secondary'|'Hobby'|'Rarely'|'Sometimes'

export interface SKILL_INTERFACE {
    title:string,
    icon:string,
    info?:string
    category:skillCategory[]
    mastery:mastery
    usage:usage
    isShow:boolean,
    isShowInDashboard:boolean
}

export const SKILLS:SKILL_INTERFACE[] = [
    {
        title:'C++',
        icon:'/cpp.svg',
        info:'a good langauge',
        category:['lang'],
        mastery:'Good',
        usage:'Hobby',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'C#',
        icon:'/csharp.svg',
        info:'a good langauge',
        category:['lang'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'C',
        icon:'/c.svg',
        info:'a good langauge',
        category:['lang'],
        mastery:'Good',
        usage:'Hobby',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Java',
        icon:'/java.svg',
        info:'a good langauge',
        category:['lang'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'React.js',
        icon:'/react.svg',
        info:'a good langauge',
        category:['lib','fe'],
        mastery:'Good',
        usage:'Primary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Redux',
        icon:'/redux.svg', 
        info:'a good langauge',
        category:['misc','fe','lib'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Jest',
        icon:'/jest.svg', 
        info:'a good langauge',
        category:['misc'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'MaterialUI',
        icon:'/materialui.svg', 
        info:'a good langauge',
        category:['fe'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Python',
        icon:'/python.svg', 
        info:'a good langauge',
        category:['lang'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'VS Code',
        icon:'/vscode.svg', 
        info:'a good langauge',
        category:['tool'],
        mastery:'Good',
        usage:'Primary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Android Studio',
        icon:'/astudio.svg', 
        info:'a good langauge',
        category:['tool','fe'],
        mastery:'Average',
        usage:'Hobby',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Tailwind',
        icon:'/tailwind.svg', 
        info:'a good langauge',
        category:['fe','lib'],
        mastery:'Good',
        usage:'Primary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Flutter',
        icon:'/flutter.svg', 
        info:'a good langauge',
        category:['lang','fe','fw'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Graphql',
        icon:'/graphql.svg', 
        info:'a good langauge',
        category:['lang','be'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Next.js',
        icon:'/next.svg', 
        info:'a good langauge',
        category:['fw','fe','be','fs'],
        mastery:'Average',
        usage:'Secondary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Express',
        icon:'/express.svg', 
        info:'a good langauge',
        category:['be','fw'],
        mastery:'Good',
        usage:'Primary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Postgre',
        icon:'/postgre.svg', 
        info:'a good langauge',
        category:['db'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'MySQL',
        icon:'/mysql.svg', 
        info:'a good langauge',
        category:['db'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Mongodb',
        icon:'/mongodb.svg', 
        info:'a good langauge',
        category:['db'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Firebase',
        icon:'/firebase.svg', 
        info:'a good langauge',
        category:['sv','db','be'],
        mastery:'Minimum',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Postman',
        icon:'/postman.svg', 
        info:'a good langauge',
        category:['tool'],
        mastery:'Average',
        usage:'Secondary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'SocketIO',
        icon:'/socketio.svg', 
        info:'a good langauge',
        category:['be','lib'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'PHP',
        icon:'/php.svg', 
        info:'a good langauge',
        category:['lang'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Kotlin',
        icon:'/kotlin.svg', 
        info:'a good langauge',
        category:['lang'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Flask',
        icon:'/flask.svg', 
        info:'a good langauge',
        category:['fw','be'],
        mastery:'Good',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Redis',
        icon:'/redis.svg', 
        info:'a good langauge',
        category:['db','be'],
        mastery:'Minimum',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Scikit-Learn',
        icon:'/sklearn.svg', 
        info:'a good langauge',
        category:['lib'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Pandas',
        icon:'/pandas.svg', 
        info:'a good langauge',
        category:['lib'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Numpy',
        icon:'/numpy.svg', 
        info:'a good langauge',
        category:['lib','misc'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'ChakraUI',
        icon:'/chakraui.svg', 
        info:'a good langauge',
        category:['fe','lib'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Nodejs',
        icon:'/nodejs.svg', 
        info:'a good langauge',
        category:['be'],
        mastery:'Good',
        usage:'Primary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Laravel',
        icon:'/laravel.svg', 
        info:'a good langauge',
        category:['fe','be','fs','fw'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Anaconda',
        icon:'/anaconda.svg', 
        info:'a good langauge',
        category:['tool'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Typescript',
        icon:'/typescript.svg', 
        info:'a good langauge',
        category:['lang'],
        mastery:'Good',
        usage:'Primary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Javascript',
        icon:'/javascript.svg', 
        info:'a good langauge',
        category:['lang'],
        mastery:'Good',
        usage:'Secondary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'HTML',
        icon:'/html.svg', 
        info:'a good langauge',
        category:['misc','fe'],
        mastery:'Good',
        usage:'Secondary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'CSS',
        icon:'/css.svg', 
        info:'a good langauge',
        category:['misc','fe'],
        mastery:'Good',
        usage:'Primary',
        isShow:true,
        isShowInDashboard:true
    },
]