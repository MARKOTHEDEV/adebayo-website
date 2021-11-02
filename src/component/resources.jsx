import image1 from '../public/image1.jpg'

const Resources = ()=>{

    const  list_of_resource = [
        {id:0,content:"The Mind of Business with DB Adebayo TV Show",image:image1},
        {id:0,content:'Job Prep Skits',image:image1},
        {id:0,content:'Self development Skits for Entrepreneurs',image:image1},
        {id:0,content:'Thinking out loud (Quotes & insghts from DB)',image:image1},
        {id:0,content:'Training Skits for Career Proffesionals',image:image1},
    ]
    return (
        <div className="section_f">
                <h2 className="section_f_headText">Resources</h2>

                {/* <!-- start  of section_f__grid --> */}
                <div className="section_f__grid">
                    

                    {
                        list_of_resource.map(({id,content,image})=>{

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

export default Resources