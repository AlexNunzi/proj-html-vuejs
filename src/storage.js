import {reactive} from 'vue';

export const storage = reactive(
    {
        currentPage: 0,
        navLinks: [
            {
                name: 'Home',
                link:'#Home'
            },
            {
                name: 'Rates',
                link:'#Rates'
            },
            {
                name: 'Testimonials',
                link:'#Testimonials'
            },
            {
                name: 'FAQ',
                link:'#FAQ'
            },
            {
                name: 'Blog',
                link:'#Blog'
            },
            {
                name: 'Contact',
                link:'#Contact'
            },
            {
                name: 'Free quote',
                link:'#FreeQuote'
            },
        ],
        socialLinks: [
            {
                icon: 'fa-brands fa-facebook-f',
                link: '#Facebook'
            },
            {
                icon: 'fa-brands fa-twitter',
                link: '#Twitter'
            },
            {
                icon: 'fa-brands fa-instagram',
                link: '#Instagram'
            },
            {
                icon: 'fa-brands fa-youtube',
                link: '#Youtube'
            },
        ],
        solutions: [
            {
                img: 'TwoManTeams-600x383.jpg',
                title: 'Two Man Teams',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum recusandae suscipit quia eum quae obcaecati laboriosam temporibus vel.',
                link: '#TwoManTeams'
            },
            {
                img: 'WeDoAllTheLifting-600x383.jpg',
                title: 'We Do All The Lifting',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum recusandae suscipit quia eum quae obcaecati laboriosam temporibus vel.',
                link: '#WeDoAllTheLifting'
            },
            {
                img: 'CoastToCoast-600x383.jpg',
                title: 'Coast To Coast',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum recusandae suscipit quia eum quae obcaecati laboriosam temporibus vel.',
                link: '#CoastToCoast'
            }
        ],
        testimonials: [
            {
                img: 'johndoe-400x400.jpg',
                name: 'Jhon Doe',
                text: '\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat accusantium magnam, ipsum autem labore alias voluptates debitis eius iste rerum quasi ex dolore delectus impedit illo minima quaerat? Debitis, quisquam.\"'
            },
            {
                img: 'janedoe-400x400.jpg',
                name: 'Jane Doe',
                text: '\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat accusantium magnam, ipsum autem labore alias voluptates debitis eius iste rerum quasi ex dolore delectus impedit illo minima quaerat? Debitis, quisquam.\"'
            },
            {
                img: 'johnsmith-400x400.jpg',
                name: 'John Smith',
                text: '\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat accusantium magnam, ipsum autem labore alias voluptates debitis eius iste rerum quasi ex dolore delectus impedit illo minima quaerat? Debitis, quisquam.\"'
            }
        ],
        recentPost: [
            {
                name: 'Heading Out To College?',
                link: '#HeadingOutToCollege'
            },
            {
                name: 'Moving Your Business?',
                link: '#MovingYourBusiness'
            },
            {
                name: 'Outstanding Quality',
                link: '#OutstandingQuality'
            },
            {
                name: 'Cost Of Moving',
                link: '#CostOfMoving'
            },
            {
                name: 'Best Moving Tips',
                link: '#BestMovingTips'
            }
        ]
    }
);