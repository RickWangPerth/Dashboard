function Nav() {
    return (
        <nav className="nav">
            <img src="./img/logo-white.png" className="nav-logo" alt="roborigger-logo" />
        </nav>
    )
}

function MonthSelection(){
    return(
        <div className="">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="1" id="jan"></input>
                <label className="form-check-label" htmlFor="jan">January</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="2" id="feb"></input>
                <label className="form-check-label" htmlFor="feb">February</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="3" id="mar"></input>
                <label className="form-check-label" htmlFor="mar">March</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="4" id="apr"></input>
                <label className="form-check-label" htmlFor="apr">April</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="5" id="may"></input>
                <label className="form-check-label" htmlFor="may">May</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="6" id="jun"></input>
                <label className="form-check-label" htmlFor="jun">June</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="7" id="jul"></input>
                <label className="form-check-label" htmlFor="jul">July</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="8" id="aug"></input>
                <label className="form-check-label" htmlFor="aug">August</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="9" id="sep"></input>
                <label className="form-check-label" htmlFor="sep">Septempber</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="10" id="oct"></input>
                <label className="form-check-label" htmlFor="oct">October</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="11" id="nov"></input>
                <label className="form-check-label" htmlFor="nov">November</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="12" id="dec"></input>
                <label className="form-check-label" htmlFor="dec">December</label>
            </div>
        </div>
    )
}

function SiteSelection(){
    return(
        <div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="site-1" id="site-1"></input>
                <label className="form-check-label" htmlFor="site-1">Victoria Cross Project</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="site-1" id="site-2"></input>
                <label className="form-check-label" htmlFor="site-2">Perth Museum Project</label>
            </div>
        </div>
    )
}

function SiteDetail(){
    return(
        <div>
            <div>
                <span><strong>Name: </strong></span> <span>Lendlease Building Pty Ltd - Victoria Cross Project</span>
            </div>
            <div>
                <span><strong>Address: </strong></span> <span>North Sydney</span>
            </div>
            <div>
                <span><strong>Email: </strong></span> <span>vcp@lendlease.com</span>
            </div>
            <div>
                <span><strong>Manager: </strong></span> <span>XXX</span>
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <div>
        <Nav />
        <div className="container pt-3">
            <div className="row align-items-start">
                <div className="col-2"></div>
                <div className="col-2">
                    <MonthSelection />
                </div>
                <div className="col-2">
                    <SiteSelection />
                </div>
                <div className="col-5">
                    <SiteDetail />
                </div>
                <div className="col-1"></div>
            </div>
        </div>
        <div className="container">
            <div className="row align-items-start">
                <div className="col-4"></div>
                <div className="col-2">
                    <button type="button" className="btn btn-robo">Preview</button>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-robo">Send</button>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    </div>
)