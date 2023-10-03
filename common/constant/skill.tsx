import { SKILL_INTERFACE } from "../types/skill"

export const SKILLS:SKILL_INTERFACE[] = [
    {
        title:'C++',
        icon:'/cpp.svg',
        info:'C++ is a powerful, high-level programming language used to create software. It supports object-oriented, procedural, and generic programming paradigms.',
        category:['lang'],
        mastery:'Good',
        usage:'Hobby',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'C#',
        icon:'/csharp.svg',
        info:"C# is a versatile, object-oriented programming language developed by Microsoft. It's widely used for building Windows applications, web services, and games, thanks to its powerful and user-friendly syntax.",
        category:['lang'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'C',
        icon:'/c.svg',
        info:"C is a powerful and foundational programming language. It's known for its efficiency and close-to-hardware capabilities, making it popular for system-level programming and building operating systems.",
        category:['lang'],
        mastery:'Good',
        usage:'Hobby',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Java',
        icon:'/java.svg',
        info:`Java is a versatile, object-oriented programming language known for its "write once, run anywhere" capability. It's widely used for building applications, web services, and Android apps due to its platform independence.`,
        category:['lang'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Python',
        icon:'/python.svg', 
        info:`Python is a high-level, versatile programming language known for its simplicity and readability. It's widely used in web development, scientific computing, data analysis, artificial intelligence, and more.`,
        category:['lang'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'React',
        icon:'/react.svg',
        info:`ReactJS is a JavaScript library for building user interfaces, known for its component-based approach, reusability, and efficient rendering of UI elements.`,
        category:['lib','fe'],
        mastery:'Good',
        usage:'Primary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Redux',
        icon:'/redux.svg', 
        info:`Redux is a predictable state container for JavaScript apps. It helps manage application state in a predictable way, aiding in debugging and testing.`,
        category:['misc','fe','lib'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Jest',
        icon:'/jest.svg', 
        info:`Jest is a popular JavaScript testing framework. It's known for its simplicity, speed, and comprehensive toolset for testing JavaScript code.`,
        category:['misc'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:false
    },
    {
        title:'MaterialUI',
        icon:'/materialui.svg', 
        info:`Material-UI is a popular open-source React UI framework based on Google's Material Design. It provides a set of pre-built, customizable components for building modern, responsive web applications with a sleek and consistent design.`,
        category:['fe'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'VS Code',
        icon:'/vscode.svg', 
        info: "Visual Studio Code is a versatile, free, open-source code editor by Microsoft, known for its extensive features and extensions.",
        category:['tool'],
        mastery:'Good',
        usage:'Primary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Android Studio',
        icon:'/astudio.svg', 
        info:`Android Studio is the official Integrated Development Environment (IDE) for Android app development. It provides tools and resources for building Android applications.`,
        category:['tool','fe'],
        mastery:'Average',
        usage:'Hobby',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Tailwind',
        icon:'/tailwind.svg', 
        info:'Tailwind CSS is a utility-first CSS framework. It offers pre-designed, atomic-level utility classes, allowing for efficient and rapid web development.',
        category:['fe','lib'],
        mastery:'Good',
        usage:'Primary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Flutter',
        icon:'/flutter.svg', 
        info:`Flutter is an open-source UI software development toolkit by Google. It's used to build natively compiled applications for mobile, web, and desktop.`,
        category:['lang','fe','fw'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:false
    },
    {
        title:'Graphql',
        icon:'/graphql.svg', 
        info:`GraphQL is a query language for APIs, enabling more efficient and flexible communication between clients and servers compared to traditional REST.`,
        category:['lang','be'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:false
    },
    {
        title:'Next.js',
        icon:'/next.svg', 
        info:`Next.js is a popular open-source React framework that enables efficient and scalable web application development, with features like server-side rendering and static site generation.`,
        category:['fw','fe','be','fs'],
        mastery:'Average',
        usage:'Secondary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Prisma',
        icon:'/prisma.svg', 
        info:'Modern database toolkit for type-safe queries, migrations, and schema management in multiple programming languages.',
        category:['be','misc','lib'],
        mastery:'Good',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Express',
        icon:'/express.svg', 
        info:`Express.js is a popular open-source web application framework for Node.js. It simplifies the creation of robust and scalable web applications and APIs.`,
        category:['be','fw'],
        mastery:'Good',
        usage:'Primary',
        isShow:true,
        isShowInDashboard:false
    },
    {
        title:'Postgre',
        icon:'/postgre.svg', 
        info:`PostgreSQL, often referred to as "Postgres," is a powerful open-source relational database management system known for its stability and extensibility.`,
        category:['db'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:false
    },
    {
        title:'MySQL',
        icon:'/mysql.svg', 
        info:`MySQL is a popular open-source relational database management system. It's known for its speed, reliability, and ease of use, making it widely used for web applications.`,
        category:['db'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:false
    },
    {
        title:'Mongodb',
        icon:'/mongodb.svg', 
        info:'MongoDB is a widely used NoSQL database program. It stores data in flexible, JSON-like documents, providing scalability, flexibility, and high performance.',
        category:['db'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Firebase',
        icon:'/firebase.svg', 
        info:'Firebase is a popular mobile and web application development platform by Google. It provides a suite of services including real-time database, authentication, hosting, and more.',
        category:['sv','db','be'],
        mastery:'Minimum',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Git',
        icon:'/git.svg', 
        info:' Version control system. Tracks changes, facilitates collaboration. Repositories store code. Branching isolates work. Merging combines changes',
        category:['tool'],
        mastery:'Good',
        usage:'Primary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Postman',
        icon:'/postman.svg', 
        info:`Postman is a popular collaboration platform for API development. It allows users to design, test, and document APIs, making the development process more efficient and streamlined.`,
        category:['tool'],
        mastery:'Average',
        usage:'Secondary',
        isShow:true,
        isShowInDashboard:false
    },
    {
        title:'SocketIO',
        icon:'/socketio.svg', 
        info:`Socket.IO is a JavaScript library that enables real-time, bidirectional and event-based communication between the browser and the server. It's widely used for building interactive web applications.`,
        category:['be','lib'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:false
    },
    {
        title:'PHP',
        icon:'/php.svg', 
        info:`PHP is a widely used server-side scripting language for web development. It's known for its ease of integration, versatility, and extensive community support.`,
        category:['lang'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Kotlin',
        icon:'/kotlin.svg', 
        info:`Kotlin is a modern, statically-typed programming language that runs on the Java Virtual Machine (JVM). It's concise, expressive, and interoperable with Java.`,
        category:['lang'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:false
    },
    {
        title:'Jquery',
        icon:'/jquery.svg', 
        info:`Lightweight JavaScript library simplifying DOM manipulation, event handling, animations, AJAX, making web development more efficient and cross-browser compatible.        `,
        category:['misc'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:false
    },
    {
        title:'Flask',
        icon:'/flask.svg', 
        info:`Flask is a lightweight and versatile Python web framework. It simplifies the creation of web applications and APIs, known for its simplicity and flexibility.`,
        category:['fw','be'],
        mastery:'Good',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:false
    },
    {
        title:'Redis',
        icon:'/redis.svg', 
        info:`Redis is an open-source, in-memory data structure store. It's used as a database, cache, and message broker, known for its speed and versatility.`,
        category:['db','be'],
        mastery:'Minimum',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Scikit-Learn',
        icon:'/sklearn.svg', 
        info:`Scikit-learn is a popular open-source machine learning library for Python. It provides a wide range of tools for tasks like classification, regression, clustering, and more.`,
        category:['lib'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:false
    },
    {
        title:'Pandas',
        icon:'/pandas.svg', 
        info:`Pandas is a widely used open-source data manipulation and analysis library for Python. It provides easy-to-use data structures and functions for efficient data handling.`,
        category:['lib'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Numpy',
        icon:'/numpy.svg', 
        info:`NumPy is a fundamental numerical computing library for Python. It provides support for arrays and matrices, along with a large collection of mathematical functions to operate on these data structures.`,
        category:['lib','misc'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'ChakraUI',
        icon:'/chakraui.svg', 
        info:`Chakra UI is a popular open-source component library for React. It provides a set of accessible and customizable UI components to streamline web application development.`,
        category:['fe','lib'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Nodejs',
        icon:'/nodejs.svg', 
        info:`Node.js is an open-source, cross-platform JavaScript runtime environment. It enables server-side execution of JavaScript, ideal for building scalable network applications.`,
        category:['be'],
        mastery:'Good',
        usage:'Primary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Laravel',
        icon:'/laravel.svg', 
        info:'Laravel is a widely used open-source PHP web framework. It emphasizes elegant syntax and provides tools for tasks like authentication, routing, and database management.',
        category:['fe','be','fs','fw'],
        mastery:'Average',
        usage:'Rarely',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Anaconda',
        icon:'/anaconda.svg', 
        info:`Anaconda is a popular distribution of Python for data science and machine learning tasks. It includes a comprehensive collection of libraries and tools for scientific computing.`,
        category:['tool'],
        mastery:'Average',
        usage:'Sometimes',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Typescript',
        icon:'/typescript.svg', 
        info:`TypeScript is an open-source programming language developed by Microsoft. It is a superset of JavaScript that adds static typing to the language, making it more robust and suitable for larger-scale applications.`,
        category:['lang'],
        mastery:'Good',
        usage:'Primary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'Javascript',
        icon:'/javascript.svg', 
        info:`JavaScript is a versatile, widely-used programming language primarily known for its role in web development. It enables interactivity and dynamic content on websites.`,
        category:['lang'],
        mastery:'Good',
        usage:'Secondary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'HTML',
        icon:'/html.svg', 
        info:`HTML, or HyperText Markup Language, is the standard language used for creating web pages. It provides the structure and content of a webpage through elements and tags.`,
        category:['misc','fe'],
        mastery:'Good',
        usage:'Secondary',
        isShow:true,
        isShowInDashboard:true
    },
    {
        title:'CSS',
        icon:'/css.svg', 
        info:`CSS, or Cascading Style Sheets, is a stylesheet language used to control the presentation and layout of HTML documents. It defines how web pages look, including aspects like colors, fonts, and spacing.`,
        category:['misc','fe'],
        mastery:'Good',
        usage:'Primary',
        isShow:true,
        isShowInDashboard:true
    },
]