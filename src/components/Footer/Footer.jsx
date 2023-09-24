
const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#1A1919] text-white">
            <div className="container mx-auto footer">
                <aside>
                <a className="cursor-pointer normal-case text-3xl font-semibold">CareerHub</a>
                    <p>There are many variations of passages of Lorem Ipsum,
                    <br /> but the majority have suffered alteration in some form.</p>
                </aside>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest news</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                <nav>
                    <header className="footer-title">Product</header>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integratins</a>
                </nav>
                <nav>
                    <header className="footer-title">Support</header>
                    <a className="link link-hover">Help desk</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a partner</a>
                    <a className="link link-hover">Developer</a>
                </nav>
                <nav>
                    <header className="footer-title">Contact</header>
                    <a className="link link-hover">29/7 Adarsha Nagar, Badda, Dhaka</a>
                    <a className="link link-hover">+880 1776-655689</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;