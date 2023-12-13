import PrimaryMenu from './components/primary_menu/primary_menu.component';
import Image from 'next/image';
import '../app/globals.css';

export default function Template({ children }) {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <>
              <div>
                    <header>
                    <div className="container py-5 flex items-center justify-between">
                        <a className='logo flex items-center gap-5' href="/">
                            <Image 
                            src="/headless.png" 
                            alt="Logo" 
                            width={70}
                            height={70}
                            priority />
                            <span>Headless WordPress site</span>
                        </a>
                        <PrimaryMenu />
                    </div>
                    </header>
                    <main>
                        { children }
                    </main>
                </div>
          
            <footer>
                <div className="container py-5">
                    <p className='m-0'>&copy; {year} Ricky Clarke</p>
                </div>
            </footer>
        </>
    )

  }