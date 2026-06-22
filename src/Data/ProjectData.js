const projects = [
    {
        id:0,
        name: 'React-Note-App',
        type:'Full-stack', 
        title:'Notely - React Note App',
        skills: ['React.js','Tailwind CSS','Firebase', 'Codex'], 
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
                        list:'Separating Guest and Logged-In User Sessions',
                        challenges:'There are  three ways to authenticate users: Guest, Email Sign-up, and Google Login. Managing user authentication and data storage for these different user types was a key challenge, especially ensuring that data was securely isolated and properly associated with the correct local or cloud environments.',
                        solutions: (
                            <div>
                                <p>
                            To keep this data separate, I built <span className="font-semibold -text--blue">a secure two-way routing system</span> using React Router. I created custom route guards (ProtectedRoute and GuestRoute) that act as gatekeepers—keeping guests safely limited to local storage pages while directing logged-in users to secure cloud pages. I also added <span className="font-semibold -text--blue">a fallback redirect layer</span> that automatically catches old, bookmarked links and sends them to the new correct URLs, <span className="font-semibold -text--blue">preventing broken pages</span> and keeping the user experience seamless.
                                </p>
                            </div>
                        )
                    },
                    {
                        list: 'Frontend Data Abstraction and Client-Side Migration',
                        challenges: 'With multiple views requiring similar data operations (notes, checklists, images), the main challenge was avoiding repetitive API fetching logic inside individual React components. Also, introducing new features meant local data shapes would change, risking client-side runtime errors for users returning with older cached data.',
                        solutions: (
                            <div>
                                <p>
                                    To handle this, I moved all the data-fetching and background logic out of the individual UI views and into <span className="font-semibold -text--blue">a single, centralized service file</span>. I created <span className="font-semibold -text--blue">reusable helper</span> functions that accept a simple "dataType" parameter, allowing the exact same code to cleanly feed notes, checklists, or images straight to the components. I also built <span className="font-semibold -text--blue"> a data migration utility </span> that checks for old, outdated local storage keys when the app opens and automatically formats them to match what the new UI expects, completely preventing page crashes without losing any of the user's saved history.
                                </p>
                            </div>
                        )
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
        skills: ['React.js','Tailwind CSS','Figma', 'Spline'], 
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
        name: 'MinCho',
        type:'Front-end', 
        title:'MinCho - Social Voting App',
        skills: ['Next.js','Tailwind CSS','TypeScript', 'Vercel','Neon(PostgreSQL)'], 
        description:'A responsive social voting app targeting Korean users where people debate controversial topics, vote, and discuss with context including the voter\'s field, age range, and MBTI type, creating a more engaging and informative community experience.',

        img: '../Assets/Images/thumbnail-mincho.webp',
        demolink:'https://mincho.codibara.com/',
        gitHubLink:'https://github.com/codibara/Ask101',
        overview: (
            <div>
                <p>Is mint chocolate dessert or toothpaste? Pineapple on pizza — yes or no? MinCho turns the debates people already argue about in group chats into <span className="font-semibold -text--blue">a structured social voting experience</span>, where every vote and <span className="font-semibold -text--blue">comment carries the voter's field, age range, and MBTI</span> — turning <span className="font-semibold -text--blue">an anonymous "yes/no"</span> into <span className="font-semibold -text--blue">"a 28-year-old INTJ designer thinks yes,"</span> which makes the debate far more interesting to read.</p><br/>
                <p>I owned the <span className="font-semibold -text--blue">front-end build end-to-end</span>, working closely with the design team to translate UX/UI concepts into <span className="font-semibold -text--blue">a reusable component system</span> — buttons, cards, modals, pills, and dropdowns — with consistent variants and full interaction states (hover, active, disabled, loading). On top of that I built mobile-first navigation, a real-time voting UI, infinite scroll, comment/reply threads, and notification views, <span className="font-semibold -text--blue">all connected to API routes for posts, authentication, comments, and user interactions.</span></p><br/>
                <p>I was also involved in deploying the app on Vercel, including safely managing environment variables and configuration for continuous integration. On the backend, the app is powered by a Neon (serverless PostgreSQL) database via Drizzle ORM built by a teammate, but something I worked alongside closely when wiring up front-end data needs.</p>
            </div>
        ),
        keyPoint:[
            { 
                id:0,
                cardTitle:'Features',
                content:[
                    {
                        list:'Voting System',
                        listDisc:'Users can participate in voting on posts, view results, and engage in discussions. It closes when the voting reaches a certain threshold, encouraging timely participation and fostering dynamic interactions.'
                    },
                    {
                        list:'Metadata-Driven Interactions',
                        listDisc:'Each post and comment includes metadata such as their professional field, age range, and Myers-Briggs personality type, encouraging more informed and engaging interactions within the community.'
                    },
                    {
                        list:'Permission-Gated Admin Interface',
                        listDisc:'Users with Admin permissions can create, edit, and delete platform-wide announcements, with session and role-based access control that redirects unauthenticated or non-admin users automatically.'
                    },
                ]
            },
            { 
                id:1,
                cardTitle: 'Technical Highlights',
                content: [
                {
                    list: 'Interactive Voting UI with API-Driven State',
                    listDisc:
                    'Built a two-option voting interface where users can submit or update their vote through API routes, with the UI immediately reflecting updated vote counts, selected choices, and ended-vote states.'
                },
                {
                    list: 'Infinite Scroll Post Feed',
                    listDisc:
                    'Implemented a dynamic post feed using cursor-based pagination and IntersectionObserver, allowing users to load more posts smoothly without manual pagination or full-page reloads.'
                },
                {
                    list: 'Design System & Component Architecture',
                    listDisc:
                    'Built a reusable component set(Button, Card, Pill, Dropdown, Modal) with a consistent variant(primary/secondary/tertiary) and design tokens, used across the interface to keep the UI cohesive while moving fast.'
                }
                ]
            },
        ],
        challenges: [
            { 
              id: 0,
              cardTitle: 'Challenges & Solutions',
              content: [
                {
                  list: 'Keeping Vote Counts and User Choices in Sync',
                  challenges:
                    'The voting page needed to handle several states at once: whether the user had already voted, whether they were logged in, whether the post had ended, and whether they were trying to vote on their own post.',
                  solutions: (
                    <div>
                      <p>
                        I separated the logic into a user-specific vote check and a submit handler. On page load, <span className="font-semibold -text--blue">the front-end fetches the user’s existing vote</span> with the post ID and user ID, then stores it in local state. When the user votes or changes their vote, <span className="font-semibold -text--blue">the UI calls the vote API with POST or PUT, then updates votesA, votesB, and selectedOption</span> from the API response instead of guessing the result on the client.
                      </p>
                    </div>
                  )
                },
                {
                  list: 'Building a Smooth Infinite Scroll Feed',
                  challenges:
                    'The post list needed to feel continuous without loading the entire database at once or forcing users through page buttons.',
                  solutions: (
                    <div>
                      <p>
                        I used <span className="font-semibold -text--blue">IntersectionObserver with a sentinel ref</span> at the bottom of the feed to detect when the user reaches the next loading point. The front-end sends the current cursor to the posts API, receives the next group of posts, and appends them with <span className="font-semibold -text--blue">setRows(prev =&gt; [...prev, ...data.items])</span>. This kept the feed responsive while the backend handled cursor-based pagination using created date and post ID.
                      </p>
                    </div>
                  )
                },
                {
                  list: 'Managing Profile Validation and API Feedback',
                  challenges:
                    'The profile form had multiple dependent inputs, and the nickname field needed real-time duplicate checking without calling the API on every keystroke.',
                  solutions: (
                    <div>
                      <p>
                        I built a validation layer that checks required fields, birth year range, MBTI completion, and custom occupation before saving. For nickname checking, I used a <span className="font-semibold -text--blue">debounced API request</span> with a timeout ref, so the duplicate check only runs after the user pauses typing. I also stored <span className="font-semibold -text--blue">field-level errors in state</span>, allowing the UI to show targeted feedback before sending the final PUT request to update the profile.
                      </p>
                    </div>
                  )
                }
              ]
            },
          ],
        slideImg:[
            {
                name: 'App Screenshots',
                slideImgPath:'../../Assets/Images/Mincho-App-Screen.webp',
            },
            {
                name: 'Responsive Screens',
                slideImgPath:'../../Assets/Images/Mincho-Responsive.webp',
            },
        ]
    },

    
    
    
]

export default projects;


