import PrimaryMenu from './components/primary_menu/primary_menu.component';
import '../app/globals.css';

export default function Template({ children }) {

    return (
        <>
              <div>
                    <header>
                    <div className="container py-5 flex items-center justify-between">
                        <a className='logo' href="/">HEADLESS</a>
                        <PrimaryMenu />
                    </div>
                    </header>
                    <main>
                        { children }
                    </main>
                </div>
          
            <footer>
                <div className="container py-5">
                    <p>Footer</p>
                </div>
            </footer>
        </>
    )

  }