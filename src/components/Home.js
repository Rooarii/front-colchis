import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';



const Home = () => {

  const structure = {
    firstname: "",
    lastname: "",
    mail: "",
    user_image: "",
    social_class: "",
    social_rank: ""
  }

  const [royalty, setRoyalty] = useState(new Array(structure))

  useEffect(()=>{
    const getRoyalty = async() =>{
      try {
        await axios.get("http://localhost:5000/api/royalty").then(response => {
        const result = response.data;
        setRoyalty(result);
       
        });
      } catch (error) {
        console.log(error.message)
      }
    }
    
    getRoyalty();

  },[]);

    const royaltyList = royalty.map((royal) =>
      <div className="royal-card" key={royal.id}>
        <img className="avatar" src={royal.user_image} alt={`${royal.social_rank} ${royal.firstname} ${royal.lastname}`} />
        <div>
          <div>{royal.social_rank==="King" || royal.social_rank==="Queen"? "👑": royal.social_rank==="Princess"? "👸": royal.social_rank==="Prince"? "🤴":""}</div>
          <p ><b>{royal.social_rank}{` ${royal.firstname} ${royal.lastname} `}</b></p>
        </div>
      </div>
      
    )

  return (
    <Fragment>
      <Container className="container">
        <div className="background"><b>Welcome to the Royal Kingdom of Colchis</b></div>
        <div>
          <h2>Royalty</h2>
          <div>{royaltyList}</div>
        </div>
      </Container>
    </Fragment>
    
  );
}

export default Home;