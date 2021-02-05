import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';



const Bellatores = () => {

  const structure = {
    firstname: "",
    lastname: "",
    mail: "",
    user_image: "",
    social_class: "",
    social_rank: ""
  }

  const [bellatores, setBellatores] = useState(new Array(structure))

  useEffect(()=>{
    const getBellatores = async() =>{
      try {
        await axios.get("http://localhost:5000/api/bellatores").then(response => {
        const result = response.data;
        setBellatores(result);
       
        });
      } catch (error) {
        console.log(error.message)
      }
    }
    
    getBellatores();

  },[]);

    const bellatoresList = bellatores.map((bellatore) =>
      <div className="bellatore-card" key={bellatore.id}>
        <img className="bellatore-avatar" src={bellatore.user_image} alt={`${bellatore.social_rank} ${bellatore.firstname} ${bellatore.lastname}`} />
        <div>
          <div>{bellatore.social_rank==="King" || bellatore.social_rank==="Queen"? "👑": bellatore.social_rank==="Princess"? "👸": bellatore.social_rank==="Prince"? "🤴":""}</div>
          <p ><b>{bellatore.social_rank}{` ${bellatore.firstname} ${bellatore.lastname} `}</b></p>
        </div>
      </div>
      
    )

  return (
    <Fragment>
      <Container className="container">
        <div className="bellatore-background"></div>
        <div>
          <h2>bellatores</h2>
          <div>{bellatoresList}</div>
        </div>
      </Container>
    </Fragment>
    
  );
}

export default Bellatores;