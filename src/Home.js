const Home = () => {
    return (<>
        <div className="container" style={{ height: "calc(100vh - 120px)" }}>
            <div align="center">
                <h1 >
                    Home Page
                </h1>
                <img className="img-fluid" style={{ maxHeight: "70vh" }} src={require('./image.jpg')} alt="image" />
                {/* <img  src="homepage.png" alt="image"/> */}
            </div>
        </div>

    </>);
}

export default Home;