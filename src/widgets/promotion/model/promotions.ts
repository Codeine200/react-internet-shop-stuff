import { PromotionsByCategory } from './types.ts';

export const promotions: PromotionsByCategory = {
    1: {
        id: 2,
        categoryId: 1,
        productName: 'Nebula Storm Pro',
        title1: 'BIG SALE 20%',
        title2: 'latest high-performance tech gear',
        image: {
            src: '/images/comp.png',
            config: {},
        },
    },

    2: {
        id: 10,
        categoryId: 2,
        productName: 'Midnight Glow Dress',
        title1: 'NEW SALE',
        title2: 'premium designer fashion selection',
        image: {
            src: '/images/dress.png',
            config: {
                width: '562px',
                bottom: '-80px',
                right: '-80px',
            },
        },
    },

    3: {
        id: 24,
        categoryId: 3,
        productName: 'Nike Air Max 270',
        title1: 'SPORTS DEAL',
        title2: 'lightweight comfort for everyday running',
        image: {
            src: '/images/shoes.png',
            config: {
                width: '562px',
                bottom: '-120px',
            },
        },
    },

    4: {
        id: 36,
        categoryId: 4,
        productName: 'Nordic Comfort Chair',
        title1: 'OFFICE SALE',
        title2: 'ergonomic design for productivity',
        image: {
            src: '/images/furniture.png',
            config: {
                width: '662px',
                bottom: '-120px',
                right: '-120px',
            },
        },
    },

    5: {
        id: 51,
        categoryId: 5,
        productName: 'Neon Silk Shampoo',
        title1: 'BEAUTY PROMO',
        title2: 'long-lasting colors with smooth texture',
        image: {
            src: '/images/cosmetics.png',
            config: {
                width: '562px',
                bottom: '-120px',
                right: '-60px',
            },
        },
    },

    6: {
        id: 63,
        categoryId: 6,
        productName: 'Midnight Ceramic Set',
        title1: 'KITCHEN DEAL',
        title2: 'elegant tableware for everyday dining',
        image: {
            src: '/images/dishes.png',
            config: {
                width: '562px',
                bottom: '-140px',
                right: '-70px',
            },
        },
    },

    7: {
        id: 77,
        categoryId: 7,
        productName: 'Elite Sparring Gloves',
        title1: 'NIGHT SALE',
        title2: 'durable protection for intense training',
        image: {
            src: '/images/boxing_gloves.png',
            config: {
                width: '662px',
                bottom: '-120px',
                right: '-175px',
            },
        },
    },
};