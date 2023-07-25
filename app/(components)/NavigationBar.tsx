
//import 'bootstrap';
"use client";
import { useState } from "react";

export default function NavigationBar() {

    const [searchName, setSearchName] = useState("");

    const handleFilter = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        const targetLowerCase: string = target.value.toLowerCase();
        setSearchName(targetLowerCase);
        console.log(searchName);
    }

    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            onChange={handleFilter}
                            value={searchName}></input>
                        <button className="btn btn-danger bg-gradient" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}
