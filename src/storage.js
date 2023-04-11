import {reactive} from 'vue';

export const storage = reactive(
    {
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

    }
);