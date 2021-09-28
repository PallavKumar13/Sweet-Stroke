import React from 'react'
import './header.css';

export default function Header() {
    return (
        <>
            <div >
                <nav className="nav container-fluid ">
                    <div className="logo ">
                        <h1 className="name" data-text="SweetStroke">SweetStroke</h1>
                    </div>
                    <div className="elements">
                        <i class="bi bi-brush"></i>
                        <i class="bi bi-droplet"></i>
                        <i class="bi bi-droplet-half"></i>
                        <i class="bi bi-easel"></i>
                        <i class="bi bi-paint-bucket"></i>
                        <i class="bi bi-palette"></i>
                        <i class="bi bi-brush"></i>
                        <i class="bi bi-droplet"></i>
                        <i class="bi bi-droplet-half"></i>
                        <i class="bi bi-easel"></i>
                        <i class="bi bi-paint-bucket"></i>
                        <i class="bi bi-palette"></i>
                    </div>
                </nav>
            </div>
        </>
    )
}
