import {reactive} from 'vue';

export const storage = reactive(
    {
        currentPage: 0,
        navLinks: [
            {
                name: 'Home',
                link:'#'
            },
            {
                name: 'Rates',
                link:'#'
            },
            {
                name: 'Testimonials',
                link:'#'
            },
            {
                name: 'FAQ',
                link:'#'
            },
            {
                name: 'Blog',
                link:'#'
            },
            {
                name: 'Contact',
                link:'#'
            },
            {
                name: 'Free quote',
                link:'#'
            },
        ],
        socialLinks: [
            {
                icon: 'fa-brands fa-facebook-f',
                link: '#'
            },
            {
                icon: 'fa-brands fa-twitter',
                link: '#'
            },
            {
                icon: 'fa-brands fa-instagram',
                link: '#'
            },
            {
                icon: 'fa-brands fa-youtube',
                link: '#'
            },
        ],
        solutions: [
            {
                img: 'TwoManTeams-600x383.jpg',
                title: 'Two Man Teams',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum recusandae suscipit quia eum quae obcaecati laboriosam temporibus vel.',
                link: '#'
            },
            {
                img: 'WeDoAllTheLifting-600x383.jpg',
                title: 'We Do All The Lifting',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum recusandae suscipit quia eum quae obcaecati laboriosam temporibus vel.',
                link: '#'
            },
            {
                img: 'CoastToCoast-600x383.jpg',
                title: 'Coast To Coast',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum recusandae suscipit quia eum quae obcaecati laboriosam temporibus vel.',
                link: '#'
            }
        ]
    }
);