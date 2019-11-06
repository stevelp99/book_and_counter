import React from "react";

export default function Menu(){
return (
<ul className="menu">
    <li className="menu-item">
        <a href="/">Home></a>
    </li>
    <li className="menu-item">
        <a href="/LatestBooksPage">Latest/</a>
    </li>
    <li className="menu-item">
        <a href="/books/">Books</a>
    </li>
</ul>
);
}