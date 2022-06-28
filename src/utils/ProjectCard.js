import * as React from 'react';
import "../styles/projectcard.css"
// // import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

export default function ProjectCard(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" alt='project'/>
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn" >View Project</button>
    </div>
  );
}




