import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useEffect } from 'react';
import  { useState } from 'react'
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let x = new Array() ; 
	useEffect(() => {
	  fetch('http://localhost:5001/api/notes')
	  .then(response => response.json())
	  .then(json => {
		  document.getElementById("typography").innerHTML = json[3].description;
		  document.getElementById("titleCard").innerHTML = json[3].title;
        
		  console.log(json);x=json})
	  }, []);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        id="titleCard"
      />
      <CardMedia
        component="img"
        height="194"
            src="https://our.warwick.ac.uk/wp-content/uploads/2021/03/Screenshot-2021-03-21-at-14.38.01-1024x527.png"        alt="Math"
      />
      <CardContent>
        <Typography id="typography" variant="body2" color="text.secondary">
        Override is here
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          Vector spaces are characterized by their dimension, which, roughly speaking, specifies the number of independent directions in the space. 
          </Typography>
          <Typography paragraph>
          In mathematics and physics, a vector space (also called a linear space) is a set whose elements, often called vectors, may be added together and multiplied ("scaled") by numbers called scalars. Scalars are often real numbers, but can be complex numbers or, more generally, elements of any field. The operations of vector addition and scalar multiplication must satisfy certain requirements, called vector axioms. The terms real vector space and complex vector space are often used to specify the nature of the scalars: real coordinate space or complex coordinate space.

Vector spaces generalize Euclidean vectors, which allow modeling of physical quantities, such as forces and velocity, that have not only a magnitude, but also a direction. The concept of vector spaces is fundamental for linear algebra, together with the concept of matrix, which allows computing in vector spaces. This provides a concise and synthetic way for manipulating and studying systems of linear equations.
          </Typography>
          <Typography paragraph>
          Many vector spaces that are considered in mathematics are also endowed with other structures. This is the case of algebras, which include field extensions, polynomial rings, associative algebras and Lie algebras. This is also the case of topological vector spaces, which include function spaces, inner product spaces, normed spaces, Hilbert spaces and Banach spaces.
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    
  );
  
 
}