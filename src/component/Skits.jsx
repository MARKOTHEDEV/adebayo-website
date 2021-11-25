import image1 from '../public/image1.jpg'


const Skits =()=>{

    const  list_of_skits = [
        {id:0,content:'Job Prep Skits',image:image1},
        {id:0,content:'Self development Skits for Entrepreneurs',image:image1},
        {id:0,content:'Training Skits for Career Proffesionals',image:image1},
    ]
    return (


        <div className="section_f">
        <h2 className="section_f_headText">Educate Your Self With Our Skits</h2>

        {/* <!-- start  of section_f__grid --> */}
        <div className="section_f__grid">
            

            {
                list_of_skits.map(({id,content,image})=>{

                    return (
                        <div className="section_f__content_box" key={id}>
                            <div className="section_f__content_box__imageContainer">
                            <img src={image} alt="" /> 
                            </div>
                            <p>{content}</p>
                        </div>

                    )
                })
            }

        </div>
        {/* <!-- end  of section_f__grid --> */}

    </div>
    )
}

export default Skits