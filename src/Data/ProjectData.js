const projects = [
    {
        id:0,
        name: 'React-Note-App',
        type:'Front-end', 
        title:'React Note App',
        skills: ['React.js','Tailwind','Firebase'], 
        description:'A responsive React note app for creating notes, image notes, and to-do lists, using localStorage for saved app data and Firebase Authentication for Google login and email sign-up.',
        img: '../Assets/Images/thumbnail-note-app.webp',
        qr:'../Assets/Images/react-note-qr.webp',
        demolink:'https://nosora0422.github.io/fullstack-note-app/',
        gitHubLink:'https://github.com/nosora0422/fullstack-note-app',
        overview: (
            <div>
                <p>I built this responsive note app as a <span className="font-semibold -text--blue">test-ready front-end product</span>, moving from mid-fi wireframes into a working React experience for notes, image notes, and to-do lists.</p><br/>
                <p>I used <span className="font-semibold -text--blue">CSS and Tailwind CSS</span> to create fast, consistent UI styling across desktop and mobile screens, then iterated through manual testing to refine layout, interaction states, and responsive behavior.</p><br/>
                <p>The app includes <span className="font-semibold -text--blue">Firebase Authentication</span> for Google login and email sign-up, plus scoped localStorage so guest and signed-in users can save notes, todos, and images in the browser.</p>
            </div>
        ),
        keyPoint:[
            { 
                id:0,
                cardTitle:'Function',
                content:[
                    {
                        list:'To-Do List',
                        listDisc:'Users can create multiple to-do lists, mark individual items as completed, and check their progress.'
                    },
                    {
                        list:'Note',
                        listDisc:'Users can write, organize, search, sort, and filter notes based on their purpose and preferences.'
                    },
                    {
                        list:'Image Note',
                        listDisc:'Users can upload, view, and manage image-based notes within the application.'
                    }
                ]
            },
            { 
                id:1,
                cardTitle:'Feature',
                content:[
                    {
                        list:'Search',
                        listDisc:'Users can quickly search saved items by title or content.'
                    },
                    {
                        list:'Sort and Filter',
                        listDisc:'Sorting and filtering tools help users organize notes, image notes, and to-do lists more efficiently.'
                    },
                    {
                        list:'Local Storage',
                        listDisc:'The app saves notes, image notes, and to-do lists in localStorage so data remains available across browser sessions.'
                    },
                    {
                        list:'Firebase Authentication',
                        listDisc:'Users can sign up with email or log in with Google through Firebase Authentication, with signed-in sessions separated from guest data.'
                    }
                ]
            },
        ],
        slideImg:[
            {
                name: 'Signup & Login',
                slideImgPath:'../../Assets/Images/react-note-firebase.webp'
            },
            {
                name: 'List, Note, Image tab',
                slideImgPath:'../../Assets/Images/react-note-screen.webp'
            },
            {
                name: 'Responsive Design',
                slideImgPath:'../../Assets/Images/react-note-mobile.webp'
            },
        ]
    },
    {
        id:1,
        name: 'React-Native-Mobile-App',
        type:'Front-end', 
        title:'React Native Mobile app',
        skills: ['React Native','API','Figma'], 
        description:'The objective of this project was to develop a mobile application enabling users to search for places based on bussiness hours and create a favourite list.',
        img: '../Assets/Images/thumbnail-react-native-app.webp',
        gitHubLink:'https://github.com/nosora0422/react-mobile-app',
        // demolink:'https://sarahnoh.ca',
        overview: (
            <div>
                <p>The target audience for this app is night owls who predominantly engage during the evening hours, with <span className="font-semibold -text--blue">convenient access to venues where they can stay late</span>. Initially, a hard-coded data file was utilized to establish the fundamental framework. Subsequently, integration with <span className="font-semibold -text--blue">the Yelp API</span> was implemented to enable dynamic data usage. <br/><br/>  A combination of <span className="font-semibold -text--blue">Native Stack Navigator and Bottom Bar Navigator</span> was employed to design user paths, simplifying the structure by rendering information on a single screen despite of different user paths. <br/><br/>The app was built with Expo and Android Studio, incorporating various libraries to create diverse UI designs. A future enhancement includes incorporating a feature to search for places based on the current location to enhance the User Experience.
                </p>

            </div>
        ),
        keyPoint:[
            { 
                id:0,
                cardTitle:'.Feature',
                content:[
                    {
                        list:'Search Place',
                        listDisc:'This component efficiently handles the rendering of detailed project information fetched from the data file.'
                    },
                    {
                        list:'Filter by category',
                        listDisc:'Users can navigate through cities and refine their search results by selecting specific categories, streamlining their exploration process.'
                    },
                    {
                        list:'Save to List',
                        listDisc:'Each venue discovered can be effortlessly added to the user\'s personalized favourite list, ensuring easy access for future reference.'
                    },
                ]
            },
            { 
                id:1,
                cardTitle:'Key elements',
                content:[
                    {
                        list:'Asyncstorage',
                        listDisc:'Utilizing AsyncStorage, the app stores users\' favourite lists locally, ensuring seamless access to saved venues.'
                    },
                    {
                        list:'Axios',
                        listDisc:'Axios was chosen for its streamlined error handling capabilities during HTTP requests, offering built-in support for efficiently managing network errors, server errors, and other unexpected issues.'
                    },
                    {
                        list:'RNE Theme',
                        listDisc:'The app\'s UI is enhanced with the React Native Elements (RNE) Theme, ensuring a cohesive and visually appealing design across different components and screens.'
                    }
                ]
            },
        ],
        slideImg:[
            {
                name: 'App Screens',
                slideImgPath:'../../Assets/Images/react-mobile-screens.webp'
            },
            {
                name: 'Navigation Flow',
                slideImgPath:'../../Assets/Images/react-mobile-nav.webp'
            },
            {
                name: 'Yelp Api',
                slideImgPath:'../../Assets/Images/react-mobile-api.webp'
            },
        ], 
        
        
    },
    {
        id:2,
        name: 'React-Portfolio-Website',
        type:'Front-end', 
        title:'React Portfolio Website',
        skills: ['React.js','Tailwind','Figma', 'Spline'], 
        description:'The goal of this portfolio was to create a single-page website using React.js that showcases myself as a front-end developer and introduces my projects.',
        img: '../Assets/Images/thumbnail-react-portfolio.webp',
        qr:'../Assets/Images/react-portfolio-qr.webp',
        gitHubLink:'https://github.com/nosora0422/react-portfolio',
        // demolink:'https://sarahnoh.ca',
        overview: (
            <div>
                <p>The portfolio underwent a transformation from HTML, CSS, and JavaScript to React.js in order to streamline development and maintenance processes.</p><br/>
                <p> Utilizing <span className="font-semibold -text--blue">React's component-based architecture</span>, a separate data file containing an object array was created to facilitate the rendering of repetitive UI elements and pages within a single component. This approach <span className="font-semibold -text--blue">significantly reduced the overall codebase</span> by consolidating redundant code and simplifying content updates.</p><br/> 
                <p>The transition to React not only <span className="font-semibold -text--blue">enhanced code maintainability</span> but also expedited development cycles, allowing for more <span className="font-semibold -text--blue">efficient management</span> of both data and UI styles.</p>
            </div>
        ),
        keyPoint:[
            { 
                id:0,
                cardTitle:'Component',
                content:[
                    {
                        list:'ProjectDetail',
                        listDisc:'This component efficiently handles the rendering of detailed project information fetched from the data file.'
                    },
                    {
                        list:'Card',
                        listDisc:'The Card component\'s "columns" prop offers flexibility in layout design by allowing easy adjustment switch between different column configurations, such as 6 columns or 4 columns.'
                    },
                    {
                        list:'Button',
                        listDisc:'Integrating the Button component with customizable text and colour props enhances development efficiency and consistency across multiple pages.'
                    },
                ]
            },
            { 
                id:1,
                cardTitle:'Library & Plugin',
                content:[
                    {
                        list:'Spline',
                        listDisc:'Implemented Spline to effortlessly create 3D elements, seamlessly integrating them into the website with minimal code.'
                    },
                    {
                        list:'Framer Motion',
                        listDisc:'Framer Motion enhanced the user experience with an array of animations, from sliding navigation bars to fading-in cards.'
                    },
                    {
                        list:'Tailwind CSS',
                        listDisc:'Utilized Tailwind CSS streamlined styling and consistent design, benefiting from its utility-first approach and extensive pre-built components. '
                    }
                ]
            },
            { 
                id:2,
                cardTitle:'Data Rendering',
                content:[
                    {
                        list:'useParam()',
                        listDisc:'The useParam() was used to retrieve id parameters from the URL, enhancing dynamic routing within project components.'
                    },
                    {
                        list:'Object-oriented array',
                        listDisc:'Most content is rendered from an object-oriented array structure for efficient data organization and manipulation, ensuring scalability and maintainability.'
                    },
                    {
                        list:'Array methods',
                        listDisc:'JavaScript array methods such as parseInt, map, and filter were used to optimize data processing and extraction, enhancing performance and functionality.'
                    },
                ]
            },
        ],
        slideImg:[
            {
                name: 'Dark Theme',
                slideImgPath:'../../Assets/Images/react-portfolio-dark.webp'
            },
            {
                name: 'Object Array',
                slideImgPath:'../../Assets/Images/react-portfolio-object.webp'
            },
        ]
    },
    {
        id:3,
        name: 'React-Movie-Search-App',
        type:'Front-end', 
        title:'React Movie Search App',
        skills: ['React.js','CSS','API', 'JSON'], 
        description:'The project aimed to develop a TMDB movie application using the TMDB API, enabling users to access movie information efficiently.',
        img: '../Assets/Images/thumbnail-react-movie-app.webp',
        qr:'../Assets/Images/react-movie-qr.webp',
        gitHubLink:'https://github.com/nosora0422/react-movie-app',
        demolink:'https://nosora0422.github.io/react-movie-app/#/',
        overview: 'Originally built with HTML, CSS, and JavaScript, the project transitioned to React.js for improved component management and API integration. Key functionalities include a search feature, saving favourites, and social media sharing, with a focus on optimizing API usage for a seamless user experience.',
        keyPoint:[
            { 
                id:0,
                cardTitle:'Function',
                content:[
                    {
                        list:'Search',
                        listDisc:'Users can search movies by the name of the movie.'
                    },
                    {
                        list:'Browse Movie List',
                        listDisc:'The category loades various movie lists, which enables easy and quick access to movie information.'
                    },
                ]
            },
            { 
                id:1,
                cardTitle:'Feature',
                content:[
                    {
                        list:'Watch now',
                        listDisc:'Each movie item provide with a link that redirects to TMDB pages for selected movie.'
                    },
                    {
                        list:'Save to List',
                        listDisc:'Users can save movies to the favourite list by clicking a heart icon.'
                    },
                    {
                        list:'Share List',
                        listDisc:'Userâ€™s favourite list can be shared on their social media such as Facebook, WhatsApp, and Twitter. '
                    }
                ]
            },
            { 
                id:2,
                cardTitle:'Data',
                content:[
                    {
                        list:'Local Storage',
                        listDisc:'The app gets objects from local Storage and save new objects to local storage using setItem() and getItem() with JSON.parse() and JSON.stringify().'
                    },
                    {
                        list:'API',
                        listDisc:'TMDB API and functions, fetch() to make network requests and JSON.parse() to parse the body text to JSON.'
                    },
                ]
            },
            { 
                id:3,
                cardTitle:'Key Elements',
                content:[
                    {
                        list:'createContext()',
                        listDisc:'createContext() and Provider facilitated the sharing of global search terms among components.'
                    },
                    {
                        list:'useEffect()',
                        listDisc:'useEffect() ensured requests were made selectively, triggered by changes in dependencies like page size.'
                    },
                    {
                        list:'map() & object arrays',
                        listDisc:'Utilizing map() with object arrays allowed for the dynamic generation of components, optimizing for efficient updates and revisions.'
                    },
                ]
            },
        ]
    },

    
    
    
]

export default projects;


