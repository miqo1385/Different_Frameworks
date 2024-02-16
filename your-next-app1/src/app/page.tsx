import Header from './Header';
import Section from './Section';
import Footer from './Footer';

const IndexPage = () => {
    return (
        <div>
            <Header />
            <main>
                <Section
                    title="Welcome to our website!"
                    content="This is a placeholder section."
                />

            </main>
            <Footer />
        </div>
    );
};

export default IndexPage;


