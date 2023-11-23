import "./HomePage.css"
import youtube from "/assets/youtube.png";
import instagram from "/assets/instagram.png";
import facebook from "/assets/facebook.png";

function HomePage () {
    return(
        <div className="mt-10">
            <div className="homepagebox card bg-base-200 shadow-xl">
        <section className="food-manager-app ">
            <div className="app-title">
            <h1>Foodsie</h1>
            <h3>The Food Manager App of the year !</h3>
            hr
            </div>
            </section>

            <section className="function-boxes ">
            <div className="little-box glass bg-cyan-950">
            <h2>Catalog</h2>
            <div><p>Elegant menu display for clients</p></div>
            </div>
            <div className="little-box glass bg-cyan-950">
            <h2>Details Page</h2>
            <p>Informative dish details</p>
            </div>
            <div className="little-box glass bg-cyan-950">
            <h2>Management</h2>
            <p>Create, edit or delete your Menus</p>
            </div>
            </section>
            </div>
        <br />
            <footer className="glass bg-cyan-950" >
                <h2>Start Managing Your Corporate Food Today !</h2>
                <hr />
                <p>Get started with our Food Manager app</p>
                <div className=" ml-64 justify-start w-8 flex ">
                <img className="ml-20 mr-4 cursor-pointer" src={facebook}/>
                <img className="mr-4 cursor-pointer" src={youtube}/>
                <img className="mr-4 cursor-pointer" src={instagram}/>
                
                </div>
            </footer>
            
        </div>
        
    )

}

export default HomePage