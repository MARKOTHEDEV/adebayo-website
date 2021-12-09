import image2 from '../public/Image 2.jpg'
import image1 from '../public/image1.jpg'
import eveningWithBossImage from '../public/eveningWiththeBoss.jpg'
import CallingImage from '../public/Screenshot_20200303-090732_Gallery.jpg'
import hero_image from '../public/wearing_native.jpg'
import image3 from "../public/Image 3.jpg"
import image6 from "../public/Image 6.jpg"
import Image4 from "../public/Image 4.jpg"
import image8 from "../public/Image 8.jpg"
const Gallery =()=>{

    const galleryImagesData =[
        [image2,image1],
        [eveningWithBossImage,image3],
        [CallingImage,image6],
        [hero_image,Image4],
        [eveningWithBossImage,image8]
       
        
    ]
    return (
    <div className="section_g"> 
    <h2 className="section_heading">Gallery</h2>
    
            
    <div className="gallery">
        {
            galleryImagesData.map(eachImages=>{

                return (
                    <div className="gallery__column">
                        {
                            eachImages.map(data=>{
                                return (
                                    <a  className="gallery__link">
                                        <figure className="gallery__thumb">
                                        <img src={data} alt="gallery image" className="gallery__image" />
                                        {/* <figcaption className="gallery__caption">Image Caption</figcaption> */}
                                        </figure>
                                </a>
                                )
                            })
                        }
                    {/* 
                        <a href="https://unsplash.com/@oladimeg" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                            <img src="./images/FB_IMG_1610551993840.jpg" alt="gallery image" className="gallery__image" />
                            <figcaption className="gallery__caption">Image Caption</figcaption>
                            </figure>
                        </a>

                        <a href="https://unsplash.com/@a2eorigins" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                            <img src="./images/hero_pics.jpg" alt="gallery image" className="gallery__image" />
                            <figcaption className="gallery__caption">Image Caption</figcaption>
                            </figure>
                        </a> */}
                    </div>
                )
            })
        }
        
        {/* <div className="gallery__column">
            <a href="https://unsplash.com/@noahbuscher" target="_blank" className="gallery__link">
                <figure className="gallery__thumb">
                    <img src="./images/Image 2.jpg" alt="gallery image" className="gallery__image" />
                    <figcaption className="gallery__caption">Image Caption</figcaption>
                </figure>
            </a>
            
            <a href="https://unsplash.com/@von_co" target="_blank" className="gallery__link">
                <figure className="gallery__thumb">
                    <img src="./images/Image 4.jpg" alt="gallery image" className="gallery__image" />
                    <figcaption className="gallery__caption">Image Caption</figcaption>
                </figure>
            </a>

            <a href="" target="_blank" className="gallery__link">
                <figure className="gallery__thumb">
                    <img src="./images/Image 5.jpg" alt="Portrait by Sam Burriss" className="gallery__image" />
                    <figcaption className="gallery__caption">Image Caption</figcaption>
                </figure>
            </a>
        </div>
        
        <div className="gallery__column">
            <a href="" target="_blank" className="gallery__link">
                <figure className="gallery__thumb">
                    <img src="./images/wearing_native.jpg" alt="Portrait by Mari Lezhava" className="gallery__image" />
                    <figcaption className="gallery__caption">Image Caption</figcaption>
                </figure>
            </a>
            
            <a href="" target="_blank" className="gallery__link">
                <figure className="gallery__thumb">
                    <img src="./images/Image 2.jpg" alt="Portrait by Ethan Haddox" className="gallery__image" />
                    <figcaption className="gallery__caption">Image Caption</figcaption>
                </figure>
            </a>

            <a href="" target="_blank" className="gallery__link">
                <figure className="gallery__thumb">
                    <img src="./images/wearing_native.jpg" alt="Portrait by Amir Geshani" className="gallery__image" />
                    <figcaption className="gallery__caption">Image Caption</figcaption>
                </figure>
            </a>
        </div>
        
        <div className="gallery__column">
            <a href="" target="_blank" className="gallery__link">
                <figure className="gallery__thumb">
                    <img src="./images/Image 8.jpg" alt="Portrait by Guilian Fremaux" className="gallery__image" />
                    <figcaption className="gallery__caption">Image Caption</figcaption>
                </figure>
            </a>

            <a href="" target="_blank" className="gallery__link">
                <figure className="gallery__thumb">
                    <img src="./images/image1.jpg" alt="Portrait by Jasmin Chew" className="gallery__image" />
                    <figcaption className="gallery__caption">Image Caption</figcaption>
                </figure>
            </a>
            
            <a href="" target="_blank" className="gallery__link">
                <figure className="gallery__thumb">
                    <img src="./images/Screenshot_20200303-090732_Gallery.jpg" alt="Portrait by Dima DallAcqua" className="gallery__image" />
                    <figcaption className="gallery__caption">Image Caption</figcaption>
                </figure>
            </a>
        </div> */}
    </div>
    
       
</div>       
    )
}


export default Gallery