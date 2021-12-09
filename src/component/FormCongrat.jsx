


const FormCongrat=(prop)=>{


    return (

                <section style={{padding:"1rem","color":"whitesmoke",position:"absolute",top:"0",
        left:"0","width":"100%","alignItems":"center",
        backgroundColor:"rgb(67, 81, 44)",textAlign:"center","display":`${showCongratMessage?"flex":"none"}`,"justifyContent":"space-between"
        }}>
            <p style={{padding:0,margin:0}}>We have Received Your Request my team will get back to you... </p>
            <i class="far fa-times-circle" style={{fontSize:"1rem"}}
                onClick={()=>setShowCongratMessage(false)}
            ></i>
        </section>
    )
}