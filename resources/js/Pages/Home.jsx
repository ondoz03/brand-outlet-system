import Layout from "../Layouts/layout";

function Home({name}) {
    return (
        <>
            <h1 className="title">Testing Data Created {name}</h1>
            <a href="">
                {new Date().toLocaleTimeString()}
            </a>
        </>
    );
}
Home.layout = page => <Layout children={page} />;

export default Home;
