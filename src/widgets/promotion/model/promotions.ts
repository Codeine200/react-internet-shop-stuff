import { PromotionsByCategory } from './types.ts';

export const promotions: PromotionsByCategory = {
    1: {
        id: 1,
        productName: 'LENNON R2D2 with NVIDIA 5090 TI',
        title1: 'BIG SALE 20%',
        title2: 'latest high-performance tech gear',
        image: {
            src: '/images/comp.png',
            config: {},
        },
    },

    2: {
        id: 2,
        productName: 'AURORA Silk Elegance Dress',
        title1: 'NEW COLLECTION',
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
        id: 3,
        productName: 'Nike Air Max Sneakers',
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
        id: 4,
        productName: 'Modern Office Desk',
        title1: 'HOME OFFICE SALE',
        title2: 'ergonomic design for productivity',
        image: {
            src: '/images/furniture.png',
            config: {},
        },
    },

    5: {
        id: 5,
        productName: 'Luxury Lipstick Set',
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
        id: 6,
        productName: 'Porcelain Dish Set',
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
        id: 7,
        productName: 'Boxing Gloves Pro Edition',
        title1: 'FIGHT NIGHT SALE',
        title2: 'durable protection for intense training',
        image: {
            src: '/images/boxing_gloves.png',
            config: {},
        },
    },
};