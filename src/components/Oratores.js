import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';



const Oratores = () => {

  const structure = {
    firstname: "",
    lastname: "",
    mail: "",
    user_image: "",
    social_class: "",
    social_rank: ""
  }

  const [oratores, setOratores] = useState(new Array(structure))

  useEffect(()=>{
    const getOratores = async() =>{
      try {
        await axios.get("http://localhost:5000/api/oratores").then(response => {
        const result = response.data;
        setOratores(result);
       
        });
      } catch (error) {
        console.log(error.message)
      }
    }
    
    getOratores();

  },[]);

    const oratoresList = oratores.map((oratore) =>
      <div className="oratore-card" key={oratore.id}>
        <img className="oratore-avatar" src={oratore.user_image} alt={`${oratore.social_rank} ${oratore.firstname} ${oratore.lastname}`} />
        <div>
          <div>{oratore.social_rank==="King" || oratore.social_rank==="Queen"? "👑": oratore.social_rank==="Princess"? "👸": oratore.social_rank==="Prince"? "🤴":""}</div>
          <p ><b>{oratore.social_rank}{` ${oratore.firstname} ${oratore.lastname} `}</b></p>
        </div>
      </div>
      
    )

  return (
    <Fragment>
      <Container className="container">
        <div className="oratore-background"></div>
        <div>
          <h2>Oratores</h2>
          <div>{oratoresList}</div>
        </div>
      </Container>
    </Fragment>
    
  );
}

export default Oratores;