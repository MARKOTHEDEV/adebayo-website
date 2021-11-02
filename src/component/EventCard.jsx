import { motion }  from 'framer-motion'

const EventCard = ({ id,image,heading,content})=>{


    return (
        <motion.div className="card mb-3" 
        whileHover={{scale:1.1}}  whileTap={{scale:1}}
          style={{maxWidth: "540px",borderRadius:"10px",color:'black'}} key={id}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="" style={{height:"100%",objectFit:'cover'}}/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{heading}</h5>
                <p className="card-text">{content}</p>
                <p className="card-text"><small className="text-muted">Click The Card To Register</small></p>
            </div>
            </div>
        </div>
        </motion.div>
    )
}

export default EventCard