import React, { useState } from 'react';
import './home.css';
import img1 from "./Img/img1.jpg";
import img2 from "./Img/img2.jpg";
import img3 from "./Img/img3.jpg";
import img4 from "./Img/img4.jpg";
import img5 from "./Img/img5.jpg";
import img6 from "./Img/img6.jpg";
import img7 from "./Img/img7.jpg";
import img8 from "./Img/img8.jpg";
import img9 from "./Img/img9.jpg";
import img10 from "./Img/img10.jpg";
import img11 from "./Img/img11.jpg";
import img12 from "./Img/img12.jpg";
import img13 from "./Img/img13.jpg";
import img14 from "./Img/img14.jpg";
import img15 from "./Img/img15.jpg";
import img16 from "./Img/img16.jpg";
import img17 from "./Img/img17.jpg";
import img18 from "./Img/img18.jpg";
import img19 from "./Img/img19.jpg";
import img20 from "./Img/img20.jpg";

export default function Home() {
    const img = [
        {

            imgSrc: img6,
            name: 'The Holly Bush Inn',
            paintingtype: 'Water Colour',
            papertype: ["Artists's Water Colour Paper by Brustro"],
            colors:<ul><li>Cobalt Blue Hue</li><li>Yellow Ochre</li><li>Burnt Sienna</li><li>Ivory Black</li><li>Carmine</li><li>Viridian Hue</li><li>Chrome Green Light Hue</li><li>Vermillion Hue</li></ul>
        },
        {
            imgSrc: img2,
            name: 'Tropical Island Beach',
            paintingtype: 'Water Colour',
            papertype: ["Artists's Water Colour Paper by Brustro"],
            colors: <ul><li>Cobalt Blue Hue</li><li>Chrome Yellow</li><li>Purssian Blue</li><li>Ivory Black</li><li>Chinese White</li><li>Viridian Hue</li><li>Chrome Green Light Hue</li><li>Vermillion Hue</li></ul>
        },
        {
            imgSrc: img3,
            name: 'Flower Field',
            paintingtype: 'Water Colour',
            papertype: ["Artists's Water Colour Paper by Brustro"],
            colors: <ul><li>Cobalt Blue Hue</li><li>Chrome Yellow</li><li>Fluorescent Ornage</li><li>Carmine</li><li>Viridian Hue</li><li>Chrome Green Light Hue</li><li>Vermillion Hue</li></ul>
        },
        {

            imgSrc: img19,
            name: 'An Edinburgh Street',
            paintingtype: 'Water Colour',
            papertype: ["Artists's Water Colour Paper by Brustro"],
            colors: <ul><li>Brunt Sienna</li><li>Chrome Yellow</li><li>Carmine</li><li>Viridian Hue</li><li>Chrome Green Light Hue</li><li>Vermillion Hue</li></ul>
        },
        {

            imgSrc: img20,
            name: 'China Town',
            paintingtype: 'Water Colour',
            papertype: ["Artists's Water Colour Paper by Brustro"],
            colors: <ul><li>Brunt Sienna</li><li>Ivory Black</li></ul>
        },
        {

            imgSrc: img4,
            name: 'Urban Sketching House',
            paintingtype: 'Water Colour',
            papertype: ["Artists's Water Colour Paper by Brustro"],
            colors: <ul><li>Cobalt Blue Hue</li><li>Sky Blue</li><li>Yellow Ochre</li><li>Burnt Sienna</li><li>Ivory Black</li><li>Carmine</li><li>Viridian Hue</li><li>Chrome Green Light Hue</li><li>Vermillion Hue</li></ul>
        },
        {
            imgSrc: img7,
            name: 'Stair Case',
            paintingtype: 'Poster Colour',
            papertype: ["Handmade Paper"],
            colors: <ul><li>Turqoise Green</li><li>Poster Green Serise 1</li><li>Chrome Yellow</li><li>Medium Hue</li><li>Poster Grey Serise 1</li><li>Poster Black</li><li>Poster Red</li><li>Poster White</li></ul>
        },
        {
            imgSrc: img16,
            name: 'Rose Farm',
            paintingtype: 'Poster Colour',
            papertype: ["Handmade Paper"],
            colors: <ul><li>Royal Blue</li><li>Poster Black</li><li>Poster White</li><li>Volet</li><li>Turqoise Green</li><li>Poster Green</li><li>Dark Green</li></ul>

        },
        {
            imgSrc: img8,
            name: 'Gulmohar Marg',
            paintingtype: 'Poster Colour',
            papertype: ["Handmade Paper"],
            colors: <ul><li>Poster Green Serise 1</li><li>Chrome Yellow</li><li>Medium Hue</li><li>Poster Light Green Serise 1</li><li>Poster Black</li><li>Poster Red</li>Sky BlueScarlet Serise 1</ul>
        },
        {
            imgSrc: img10,
            name: 'Melting Sky',
            paintingtype: 'Poster Colour',
            papertype: ["Handmade Paper"],
            colors: <ul><li>Chrome Yellow Medium Hue</li><li>Poster Black</li><li>Poster Red</li><li>Poster Orange Serise 1</li><li>Brunt Sienna</li><li>Poster White</li></ul>

        },
        {
            imgSrc: img1,
            name: 'Misty Forest',
            paintingtype: 'Water Colour',
            papertype: ["Artists's Water Colour Paper by Brustro"],
            colors: <ul><li>Prussian Blue</li><li>Chrome Yellow</li><li>Viridian Hue</li><li>Chrome Green Light Hue</li><li>Chinese White</li><li>Ivory Black</li></ul>
        },
        {
            imgSrc: img12,
            name: 'Sunset Ocean',
            paintingtype: 'Poster Colour',
            papertype: ["Handmade Paper"],
            colors: <ul><li>Poster Black</li><li>Poster Red</li><li>Orange Serise 1</li><li>Poster White</li><li>Cobalt Blue</li><li>Sky Blue</li><li>Poster Green Serise 1</li></ul>
            
        },
        {
            imgSrc: img13,
            name: 'Tikhi More',
            paintingtype: 'Poster Colour',
            papertype: ["Handmade Paper"],
            colors: <ul><li>Poster Black</li><li>Lemon Yellow</li><li>Poster White</li><li>Cobalt Blue</li><li>Sky Blue</li><li>Poster Green Serise 1</li><li>Brunt Sienna</li></ul>
        },
        {
            imgSrc: img14,
            name: 'LightHouse Seascape',
            paintingtype: 'Poster Colour',
            papertype: ["Handmade Paper"],
            colors: <ul><li>Poster Black</li><li>Poster White</li><li>Cobalt Blue</li><li>Sky Blue</li><li>Poster Grey Serise 1</li></ul>
        },
        {
            imgSrc: img5,
            name: 'Milky Way',
            paintingtype: 'Poster Colour',
            papertype: ["Handmade Paper"],
            colors: <ul><li>Cobalt Blue</li><li>Camlin Blue</li><li>Poster Grey</li><li>Poster Black</li><li>Poster Red</li><li>Poster White</li></ul>
        },
        {
            imgSrc: img11,
            name: 'Roses On Fence',
            paintingtype: 'Poster Colour',
            papertype: ["Handmade Paper"],
            colors: <ul><li>Cerulean Blue</li><li>Medium Green</li><li>Light Green</li><li>Poster Black</li><li>Special Pink</li></ul>
        },
        {
            imgSrc: img17,
            name: 'Bhootiya Tree',
            paintingtype: 'Poster Colour',
            papertype: ["Handmade Paper"],
            colors: <ul><li>Poster Green Serise 1</li><li>Light Green</li><li>Ivory Black</li></ul>
        },
        {
            imgSrc: img18,
            name: 'Castle',
            paintingtype: 'Poster Colour',
            papertype: ["Handmade Paper"],
            colors: <ul><li>Sky Blue</li><li>Ivory Black</li><li>Poster Green</li></ul>
        },
        {

            imgSrc: img9,
            name: 'Nanital Waterfall',
            paintingtype: 'Poster Colour',
            papertype: ["Handmade Paper"],
            colors: <ul><li>Sky Blue</li><li>Brunt Sienna</li><li>Poster Green</li></ul>

        },
        {

            imgSrc: img15,
            name: 'Eve',
            paintingtype: 'Poster Colour',
            papertype: ["Handmade Paper"],
            colors: <ul><li>Sky Blue</li><li>Ivory Black</li><li>Poster Green</li><li>Emerald Green Serise 1</li><li>Poster Whtie</li><li>Poster Red Serise 1</li><li>Lemon Yellow</li></ul>
        },
    ];
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const [pname, setPname] = useState('');
    const [painting, setPainting] = useState('');    
    const [paper, setPaper] = useState('');    
    const [color, setcolor] = useState('');    
    const getImg = (imgSrc, name, paintingtype, papertype, colors) => {
        setTempImgSrc(imgSrc);
        setPname(name);
        setPainting(paintingtype);
        setPaper(papertype);
        setcolor(colors);
        setModel(true);
    }
    return (
        <>


            <div className={model ? "model open" : "model"}>
                <img className="modelimage" src={tempimgSrc} alt="" />
                <div className="image-des">
                <div className="modelphoto-name" ><u>{pname}</u></div>
                <div className="modelpainting" ><span id="paintingtype">Painting Type:</span> {painting}</div>
                <div className="modelpapertype" ><span id="papertype">Paper Type: </span>{paper}</div>
                <div className="modelcolor"><span id="colors">Colours:</span>{color}</div>
                <div className="artist">Sweety</div>
                </div>
                <i class="close bi-x-lg" onClick={() => setModel(false)}></i>

            </div>
            <div>
                <div className="gallery-name"><h1>Gallery</h1></div>
                <div className="gallery">
                    {img.map((item) => {
                        const { imgSrc, name, paintingtype, papertype, colors } = item;
                        return (
                            <div className="photo-des">
                                <img src={imgSrc} alt="" className="photo" onClick={() => getImg(imgSrc,name,paintingtype, papertype, colors)} /><br />
                                <div className="photo-name" >{name}</div>
                                <div className="painting"  >{paintingtype}</div>
                                <div className="paper"  >{papertype}</div>
                                <div className="color" >{colors}</div>
                            </div>
                        )
                    }
                    )};
                </div>
            </div>
        </>
    )
}
