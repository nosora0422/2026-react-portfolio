const projects = [
    {
        id:0,
        name: 'React-Note-App',
        type:'Full-stack', 
        title:'Notely - React Note App',
        skills: ['React.js','Tailwind','Firebase', 'Codex'], 
        description:'A responsive React note app for creating notes, image notes, and to-do lists, designed to support productive daily life with Firestore-powered data storage and Firebase Authentication for Google login and email sign-up.',
        img: '../Assets/Images/thumbnail-notely-react-app.webp',
        qr:'../Assets/Images/react-note-qr.webp',
        demolink:'https://nosora0422.github.io/fullstack-note-app/',
        gitHubLink:'https://github.com/nosora0422/fullstack-note-app',
        overview: (
            <div>
                <p>I built this responsive note app as a <span className="font-semibold -text--blue">test-ready full-stack product</span>, moving from mid-fi wireframes into a working React experience for notes, image notes, and to-do lists.</p><br/>
                <p>I used <span className="font-semibold -text--blue">CSS and Tailwind CSS</span> to create fast, consistent UI styling across desktop and mobile screens, then <span className="font-semibold -text--blue">iterated through manual testing</span> to refine layout, interaction states, and responsive behavior.</p><br/>
                <p>The app includes <span className="font-semibold -text--blue">Firebase Authentication</span> for Google login and email sign-up, plus <span className="font-semibold -text--blue">Firestore</span> for signed-in users to save notes, todos, and images and browse them across devices.</p>
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
                cardTitle:'Technical Highlights',
                content:[
                    {
                        list:'Firebase Authentication and Firestore',
                        listDisc:'Users can sign up with email or log in with Google through Firebase Authentication, all data in the app is handled securely on the Firestore.'
                    },
                    {
                        list:'Search',
                        listDisc:'Users can quickly search saved items by title or content.'
                    },
                    {
                        list:'Sort and Filter',
                        listDisc:'Sorting and filtering tools help users organize notes, image notes, and to-do lists more efficiently.'
                    },
                    
                ]
            },
        ],
        challenges:[
            { 
                id:0,
                cardTitle:'Challenges & Solutions',
                content:[
                    {
                        list:'User authentication and Data Management',
                        challenges:'There are three types of users in the app: Guest, Email Sign-up, and Google Login. Managing user authentication and data storage for these different user types was a key challenge, especially ensuring that data was securely stored and properly associated with the correct user accounts.',
                        solutions:(
                            'used local storage for guest users to temporarily store their notes, while implementing Firebase Authentication for email sign-up and Google login users. This allowed me to securely manage user data in Firestore, ensuring that each user\'s notes were properly stored and accessible across sessions. I also implemented logic to handle data synchronization between local storage and Firestore when a guest user signed up or logged in, providing a seamless transition while maintaining data integrity.'
                        )
                    },
                    {
                        list:'Managing Persistent Data Storage',
                        challenges:'A key challenge was making sure notes were saved beyond the current browser session. At first, local component state was enough for testing the UI, but it was not suitable for storing real user data permanently.',
                        solutions:'I connected the app to Firebase Firestore so notes could be stored, retrieved, updated, and deleted from a database. This helped me understand how frontend applications communicate with cloud services and how to structure data for CRUD operations.'
                    },
                    {
                        list:'Learning Firestore Integration With AI Support',
                        challenges:'Connecting the React app to Firestore was new to me, especially setting up the database connection and understanding how to read and write documents correctly.',
                        solutions:'I used AI as a learning and debugging assistant while implementing the Firestore connection. Instead of relying on AI to write the entire feature, I used it to explain Firebase concepts, troubleshoot errors, and clarify how methods like adding, fetching, updating, and deleting documents worked. This helped me move faster while still understanding the implementation.'
                    }
                ]
            },
        ],
        slideImg:[
            {
                name: 'Signup & Login',
                slideImgPath:'../../Assets/Images/react-note-login-firebase.webp'
            },
            {
                name: 'List, Note, Image tab',
                slideImgPath:'../../Assets/Images/react-note-list-firebase.webp'
            },
            {
                name: 'Responsive Design',
                slideImgPath:'../../Assets/Images/react-note-mobile-screen.webp'
            },
        ]
    },
    {
        id: 1,
        name: 'React-Native-Mobile-App',
        type: 'Front-end',
        title: 'Late-Night Place Finder App',
        skills: ['React Native', 'Expo', 'RESTful API', 'AsyncStorage'],
        description:
            'A React Native mobile app that helps users discover places that are open at a selected time. Whether planning an early morning coffee or a late-night hangout, this app helps users instantly discover places open exactly when they need them.',

        img: '../Assets/Images/thumbnail-react-native-app.webp',
        gitHubLink: 'https://github.com/nosora0422/react-mobile-app',
        videoLink: 'https://player.vimeo.com/video/1196553472',

        overview: (
            <div>
            <p>
                This project was designed for users looking for places to visit in early morning or late night, especially night owls who want to quickly find places that are still open. The app uses <span className="font-semibold -text--blue">the Yelp Fusion API</span> to fetch real business data, including photos, ratings, addresses, phone numbers, business hours, and Yelp profile links.
                <br /><br />
                I built the experience around a clear mobile user flow: users can select a city, choose the time they want to stay out until, filter results by category, search directly by keyword, and open a detailed venue page. The app uses <span className="font-semibold -text--blue">Native Stack Navigator and Bottom Tab Navigator</span> to separate the main flows while keeping navigation simple and familiar.
                <br /><br />
                To improve the user experience, I added onboarding screens, nickname personalization, persistent favorite lists with <span className="font-semibold -text--blue">AsyncStorage</span>, and a settings screen where users can update or clear local data. The interface was built with Expo, React Native Elements, custom theming, and Archivo typography to create a bold dark-mode visual style optimized for mobile browsing.
            </p>
            </div>
        ),

        keyPoint: [
            {
            id: 0,
            cardTitle: 'Features',
            content: [
                {
                list: 'Time-Based Place Discovery',
                listDisc:
                    'Users can choose a city and target time, then browse Yelp results filtered to places that are open at that time.'
                },
                {
                list: 'Category and Keyword Search',
                listDisc:
                    'The app supports category filtering for coffee, restaurants, pubs, karaoke, and nightlife, plus a dedicated keyword search flow for flexible discovery.'
                },
                {
                list: 'Detailed Business Info',
                listDisc:
                    'Each place includes photos, rating, address, phone number, business hours, a Yelp link, and a Google Maps shortcut.'
                },
                {
                list: 'Favorite List',
                listDisc:
                    'Users can save venues to a local favorite list, revisit saved places, and remove items with confirmation feedback.'
                }
            ]
            },
            {
            id: 1,
            cardTitle: 'Technical Highlights',
            content: [
                {
                list: 'Yelp API Integration',
                listDisc:
                    'Implemented Axios requests to Yelp Fusion API endpoints for business search and detailed business data, including loading and error states.'
                },
                {
                list: 'Persistent Local Storage',
                listDisc:
                    'Used AsyncStorage to persist saved favorite places and user nickname data across app sessions.'
                },
                {
                list: 'Custom Mobile UI System',
                listDisc:
                    'Created a cohesive dark-mode interface using React Native Elements theming, custom components, icon-based actions, carousel imagery, and responsive mobile layouts.'
                }
            ]
            }
        ],
        challenges:[
            { 
                id:0,
                cardTitle:'Challenges & Solutions',
                content: [
                    {
                      list: 'Lightweight Data Storage for Favorite List',
                      challenges: 'Implementing a persistent favorite list that could store user data across sessions without a backend database was a key challenge. I needed a solution that was simple to implement within the React Native environment and efficient for storing small amounts of structured data.',
                      solutions: 'I implemented AsyncStorage as a lightweight local persistence layer for the favorite list. Since the app only needed to store a small amount of structured user data, AsyncStorage was an efficient choice that avoided the overhead of a backend database. I stored favorite places as serialized JSON, then created reusable logic to save, retrieve, add, and remove items from storage. This allowed the app to preserve user favorites across sessions while keeping the implementation simple, fast, and well-suited to React Native.'
                    },
                    {
                      list: 'Mobile-Specific Challenges',
                      challenges: 'Transitioning from web development to mobile also brought some great learning opportunities as a front-end developer. Web views are incredibly forgiving, but mobile requires dealing with physical device constraints.',
                      solutions: 'I solved these mobile-specific layout issues by designing the interface around native device behavior instead of treating it like a web page. I used SafeAreaProvider to prevent key UI elements, such as the floating tab bar, from overlapping with notches, rounded corners, and system navigation areas. For forms, I implemented KeyboardAvoidingView so inputs remained accessible when the native keyboard appeared. I also used FlatList for longer lists to improve rendering performance by only mounting visible items, which helped maintain a smooth scrolling experience on mobile devices.'
                    },
                    {
                      list: 'Refresh Data After Deletion',
                      challenges: 'Ensuring that the app\'s data status remained consistent within the application after a user deleted an item from their favorite list was a challenge. I needed to make sure the UI updated correctly and reflected the current state of the data.',
                      solutions: 'I handled this by keeping the favorite list state synchronized with AsyncStorage after every delete action. When a user removed an item, I updated the stored data first and then refreshed the component state so the UI immediately reflected the latest favorite list. I also used useEffect to load the most recent saved data when the favorite screen mounted, ensuring the screen always displayed the current storage state. This helped prevent stale UI, improved data consistency, and created a more reliable user experience after deletion.'
                    }
                  ]
            },
        ],
        slideImg: [
            {
            name: 'App Screens',
            slideImgPath: '../../Assets/Images/react-mobile-screens-v2.webp'
            },
            {
            name: 'Navigation Flow',
            slideImgPath: '../../Assets/Images/react-mobile-nav-v2.webp'
            },
            {
            name: 'Yelp API',
            slideImgPath: '../../Assets/Images/react-mobile-api-v2.webp'
            }
        ]
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


