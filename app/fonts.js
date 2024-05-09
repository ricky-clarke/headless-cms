import { DM_Sans, DM_Serif_Display } from 'next/font/google';

export const dm_sans = DM_Sans({ 
    subsets: ['latin'], 
    weight: ['400', '500', '600', '700'],
    variable: '--font-dm_sans',
})

export const dm_sans_serif = DM_Serif_Display({ 
    subsets: ['latin'], 
    weight: '400',
    variable: '--font-dm_sans_serif',
})