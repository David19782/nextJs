import Navbar from './Navbar'
import Footer from './Footer';

const Layout = (content: any) => {
    const children = content.children;
    return ( 
       <div className="content">
            <Navbar></Navbar>
                {children}
            <Footer></Footer>
       </div> 
    );
}
    
export default Layout;