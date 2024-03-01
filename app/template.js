import '../styles/globals.scss'
import Header from './components/header/header.component';
import HeaderFixed from './components/header_fixed/header_fixed.component';
import Footer from './components/footer/footer.component';

import { DM_Sans, DM_Serif_Display } from 'next/font/google';

const dm_sans = DM_Sans({ 
    subsets: ['latin'], 
    weight: ['100', '200', '400', '500', '600', '700'],
    variable: '--font-dm_sans',
    display: "swap",
})

const dm_sans_serif = DM_Serif_Display({ 
    subsets: ['latin'], 
    weight: '400',
    variable: '--font-dm_sans_serif',
    display: "swap",

})

export default function Template({ children }) {

    return (
        <>
              <div className={`${dm_sans.variable} ${dm_sans_serif.variable}` + ' main'}>
                <HeaderFixed />
                <Header />
                    <main>
                        { children }
                    </main>
                </div>
            <Footer />
        </>
    )

  }