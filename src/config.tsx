import placeholder from './assets/products/placeholder.png';
import { IconGauge, IconRadarOff, IconBrain, IconDiscountCheckFilled, IconShieldCheckFilled, IconReceiptRefund } from '@tabler/icons-react';

export const discordInvite = 'https://discord.gg/3YFZ2Qj';
export const products = [
    {name: 'Spoofer Permanents', id: 'sellix_id', type: "group", image: placeholder, priceRange: [10, 200], detected: false,description: 'Spoof your drives and never get banned again.'},
]

export const data = [
    {
      title: 'About',
      links: [
        { label: 'Features', link: '#features' },
        { label: 'Products', link: '#products' },
        { label: 'Contact', link: '#contact' },
      ],
    }, 
    {
        title: 'Socials', 
        links: [
          { label: 'Discord', link: discordInvite },
          { label: 'Tik Tok', link: 'https://www.tiktok.com/@neutroxcheats' },
          { label: 'Email', link: 'mailto: sales@neutrox.cc' },
        ],
      },
  ];

export const mockdata = [
    {
        title: 'FAST SUPPORT',
        description:
            'Our team of support staff are always ready to help you with any issues you may have',
        icon: IconGauge,
    },
    {
        title: 'HIGH QUALITY',
        description:
            'Our software is packed with features that will help you dominate your competition',
        icon: IconBrain,
    },
    {
        title: 'UNDETECTED CHEATS',
        description:
            'Our cheats are always undetected and we are constantly updating them to keep them that way',
        icon: IconRadarOff,
    },
    {
        title: 'CHEAP PRICES',
        description:
            'We offer the best prices on the market for the quality of our products',
        icon: IconDiscountCheckFilled,
    },
    {
        title: 'TRUSTED PRODUCTS',
        description:
            'Our products are trusted by thousands of customers and are always being updated',
        icon: IconShieldCheckFilled
    },
    { 
        title: 'QUICK REFUNDS',
        description: 'We offer quick refunds if you are not satisfied with our products',
        icon: IconReceiptRefund
    }
  ];