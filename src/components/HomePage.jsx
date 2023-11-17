import "./HomePage.css"

function HomePage () {
    return(
        <div className="homepagebox">
        <section className="food-manager-app">
            <div className="app-title">
            <h1>Food Manager App</h1>
            <p>Efficiently manage your corporate food needs</p>
            </div>
            </section>

            <section className="function-boxes">
            <div className="little-box">
            <h2>Catalog</h2>
            <p>Elegant menu display for clients</p>
            </div>
            <div className="little-box">
            <h2>Details Page</h2>
            <p>Informative page where clients can see Menu details</p>
            </div>
            <div className="little-box">
            <h2>Menu Management</h2>
            <p>Interactive Menu to create, edit or delete your Menus</p>
            </div>
            </section>

            <footer>
                <h2>Start Managing Your Corporate Food Today !</h2>
                <hr />
                <p>Get started with our Food Manager app</p>
            </footer>
        </div>
    )

}

export default HomePage