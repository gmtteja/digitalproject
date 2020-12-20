import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const Container = styled.div`
#top-title{
font-weight:800;
color:white;
font-family:open-sans;
letter-spacing:7px;
font-size:45px; 
}

.para{
 color:white;
 position:relative;
  top:20px;
}
#container-one {
  background-color:rgb(67,70,75);
  height:250px;
}

  .dot {
  height: 75px;
  width: 75px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;

}
#alldotscontainer {
  padding:20px;
  margin: auto;
}
#num1{
  
color:green;
font-weight:900;
   
}
#num2{
  
  color:green;
font-weight:900;
   
}
#num3{
   
  color:green;
font-weight:900;
}
#num4{ 
  color:green;
font-weight:900;
  
}
#line1{
  
  color:rgb(67,70,75);
}
#line2{
 
  color:rgb(67,70,75);
}
#line3{
 
  color:rgb(67,70,75);
}
#line4{
   
  color:rgb(67,70,75);
}
`

function App() {
  return (
    <Container> 
   <div>
<div className="container-fluid">
<div className="row">
<div className="col-sm-12" id="container-one" align="center">
<br/>
<h6 id="top-title"><b>CREATIVE && POWERFUL</b></h6>
<p className="para" align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .</p>
<br/>
<span id="dot1" className="dot"></span>
</div>
</div>



<div align="center" id="alldotscontainer" className="row">
<div  className="col-xs-3" style={{margin:"auto"}}>
<span  className="dot"></span><br/>
<b id="num1">2000</b><br/>
<b id="line1">AWARDS</b>
</div>
<div className="col-xs-3" style={{margin:"auto"}}>
<span  className="dot"></span><br/>
<b id="num2">520</b><br/>
<b id="line2">PROJECTS</b>
</div>
<div className="col-xs-3" style={{margin:"auto"}}>
<span  className="dot"></span><br/>
<b id="num3">268</b><br/>
<b id="line3">CLIENTS</b>
</div>
<div className="col-xs-3" style={{margin:"auto"}}>
<span  className="dot"></span><br/>
<b id="num4">1958</b><br/>
<b id="line4">PRODUCTS</b>
</div>
</div>


<br/>
<br/>



<div className="row" style={{backgroundColor:""}}>
<div className="col-xs-6" style={{margin:"auto"}}>
<div className="row">
<div className="col-xs-12">
<h3><b>POWERFUL FEATURES</b></h3>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .
</p>
</div>
</div>


<div className="row">
<div className="col-xs-3">
<span className="dot2"></span>
</div>
<div className="col-xs-9">
<b>RESPONSIVE READY</b><br/>
<p>Lorem ipsum dolor sit amet.</p>
</div>
</div>

<div className="row">
<div className="col-xs-3">
<span className="dot2"></span>
</div>
<div className="col-xs-9">
<b>RESPONSIVE READY</b><br/>
<p>Lorem ipsum dolor sit amet.</p>
</div>
</div>
</div>
<br/>

<div className="col-xs-6" style={{margin:"auto"}}>
{/* <img className="image" src="data:image/png;base64,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"/>  */}
<figure class="image is-128x128">
  <img src="https://bulma.io/images/placeholders/128x128.png"/>
</figure>
</div>
</div>
<br/><br/>

<div className="row">
<div className="col-sm-12" >
<h3 className="title3" align="center"><b>WE ARE CREATIVE AGENCY</b></h3><br/>
<hr className="hr"/><br/>
<p className="para3" align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
</div>

<br/><br/>

<div align="center" id="frame1" className="row">
<div className="col-sm-4" style={{margin:"auto"}}>
<span  className="dot"></span><br/>
<b>RESPONSIVE</b><br/>
<p>Lorem ipsum dolor sit amet  <br/> consectetur adipiscing elit,sed<br/> do eiusmod tempor .</p>
</div>
<div className="col-sm-4" style={{margin:"auto"}}>
<span  className="dot"></span><br/>
<b>SUPPORT</b><br/>
<p>Lorem ipsum dolor sit amet  <br/>consectetur adipiscing elit, sed<br/>  do eiusmod tempor  .</p>
</div>
<div className="col-sm-4" style={{margin:"auto"}}>
<span  className="dot"></span><br/>
<b>DEVELOPMENT</b><br/>
<p>Lorem ipsum dolor sit amet <br/> consectetur adipiscing elit, sed <br/>do  eiusmod tempor  .</p>
</div>
</div>
<br/>
<br/>

<div className="row">
<div className="col-sm-12">
<h6 align="center"><b>POWERFUL FEATURES</b></h6>
<h3 align="center"><b>OUR PORTFOLIO</b></h3><br/>
<hr className="hr"/><br/>
</div>
</div>

<div className="row">

<div className="col-sm-4" >
<div class="card" style={{width: "100%"}}>
  <img class="card-img-top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcIBwYHBw0QDgcGBxYPBgcRDw8NDQcRIBoXFiARHR8YKDEgGxolJx8cJTEtJSk8LjEuIyMzODkwNygyLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAADAAEFAgf/xAAeEAEBAAICAwEBAAAAAAAAAAAAEgIRASExUaGRQf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD4zKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUs0aWSAtLXJZUgLTCypASJKkBp7lSDwnqVIPKepZIOtLJNKkAypLKkAypLKkAypNLJAMqTSyQDKk0skBSyTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skBSyTSpAMsk0qQdWVJpZIClkmlkgKWSaVIBlkmlSAZZJpUgGVJZUgGVJZUgGVJpZIBlSaWSAZUmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUllSAZUmlkgGVJpZIOtKksqQDKksqQDKk0skAypNLJAUsk0skBSyTSyQFLJNKkAyyTSpAMsk0qQDKksqQDKksqQDKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypB1pZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUllSAZUmlkgGVJpZIClkmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUmlkgGVJpZIBlSaWSApZJpZIOtKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skBSyTSyQFLJNKkAyyTSpAMqSypAMqSypAMqSypB1pZJpUgGVJZUgGVJZUgGVJZUgGVJpZIBlSaWSAZUmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUmlkgGVJpZIBlSaWSApZJpZIClkmlSAZZJpUg6sqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqSypAMqTSyQDKk0skBSyTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skHWlSWVIBlSWVIBlSaWSAZUmlkgGVJpZIClkmlkgKWSaVIBlkmlSAZZJpUgGVJZUgGVJZUgGVJZUgGVJpZIBlSaWSApZJpZIClkmlkgKWSaVIBlkmlSAZUllSDrSyTSyQFLJNKkAyyTSpAMsk0qQDKksqQDKksqQDKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skHSSQJJAkkCSQLTNJAtLSQKWSkClSxApUsQKVKQMlSkDJUpApZKQKWSkClkpApZKQKVxjx3v10kDZw1359LnDDvvx9SBk4fP15yx4314/iQP/9k=" alt="Card image cap"/>
</div>
</div>

<div className="col-sm-4">
<div class="card" style={{width: "100%"}}>
  <img class="card-img-top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcIBwYHBw0QDgcGBxYPBgcRDw8NDQcRIBoXFiARHR8YKDEgGxolJx8cJTEtJSk8LjEuIyMzODkwNygyLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAADAAEFAgf/xAAeEAEBAAICAwEBAAAAAAAAAAAAEgIRASExUaGRQf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD4zKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUs0aWSAtLXJZUgLTCypASJKkBp7lSDwnqVIPKepZIOtLJNKkAypLKkAypLKkAypNLJAMqTSyQDKk0skBSyTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skBSyTSpAMsk0qQdWVJpZIClkmlkgKWSaVIBlkmlSAZZJpUgGVJZUgGVJZUgGVJpZIBlSaWSAZUmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUllSAZUmlkgGVJpZIOtKksqQDKksqQDKk0skAypNLJAUsk0skBSyTSyQFLJNKkAyyTSpAMsk0qQDKksqQDKksqQDKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypB1pZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUllSAZUmlkgGVJpZIClkmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUmlkgGVJpZIBlSaWSApZJpZIOtKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skBSyTSyQFLJNKkAyyTSpAMqSypAMqSypAMqSypB1pZJpUgGVJZUgGVJZUgGVJZUgGVJpZIBlSaWSAZUmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUmlkgGVJpZIBlSaWSApZJpZIClkmlSAZZJpUg6sqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqSypAMqTSyQDKk0skBSyTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skHWlSWVIBlSWVIBlSaWSAZUmlkgGVJpZIClkmlkgKWSaVIBlkmlSAZZJpUgGVJZUgGVJZUgGVJZUgGVJpZIBlSaWSApZJpZIClkmlkgKWSaVIBlkmlSAZUllSDrSyTSyQFLJNKkAyyTSpAMsk0qQDKksqQDKksqQDKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skHSSQJJAkkCSQLTNJAtLSQKWSkClSxApUsQKVKQMlSkDJUpApZKQKWSkClkpApZKQKVxjx3v10kDZw1359LnDDvvx9SBk4fP15yx4314/iQP/9k=" alt="Card image cap"/>
</div>
</div>



<div className="col-sm-4" >
<div class="card" style={{width: "100%"}}>
  <img class="card-img-top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcIBwYHBw0QDgcGBxYPBgcRDw8NDQcRIBoXFiARHR8YKDEgGxolJx8cJTEtJSk8LjEuIyMzODkwNygyLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAADAAEFAgf/xAAeEAEBAAICAwEBAAAAAAAAAAAAEgIRASExUaGRQf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD4zKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUs0aWSAtLXJZUgLTCypASJKkBp7lSDwnqVIPKepZIOtLJNKkAypLKkAypLKkAypNLJAMqTSyQDKk0skBSyTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skBSyTSpAMsk0qQdWVJpZIClkmlkgKWSaVIBlkmlSAZZJpUgGVJZUgGVJZUgGVJpZIBlSaWSAZUmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUllSAZUmlkgGVJpZIOtKksqQDKksqQDKk0skAypNLJAUsk0skBSyTSyQFLJNKkAyyTSpAMsk0qQDKksqQDKksqQDKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypB1pZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUllSAZUmlkgGVJpZIClkmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUmlkgGVJpZIBlSaWSApZJpZIOtKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skBSyTSyQFLJNKkAyyTSpAMqSypAMqSypAMqSypB1pZJpUgGVJZUgGVJZUgGVJZUgGVJpZIBlSaWSAZUmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUmlkgGVJpZIBlSaWSApZJpZIClkmlSAZZJpUg6sqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqSypAMqTSyQDKk0skBSyTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skHWlSWVIBlSWVIBlSaWSAZUmlkgGVJpZIClkmlkgKWSaVIBlkmlSAZZJpUgGVJZUgGVJZUgGVJZUgGVJpZIBlSaWSApZJpZIClkmlkgKWSaVIBlkmlSAZUllSDrSyTSyQFLJNKkAyyTSpAMsk0qQDKksqQDKksqQDKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skHSSQJJAkkCSQLTNJAtLSQKWSkClSxApUsQKVKQMlSkDJUpApZKQKWSkClkpApZKQKVxjx3v10kDZw1359LnDDvvx9SBk4fP15yx4314/iQP/9k=" alt="Card image cap"/>
</div>
</div>
</div>
<br/>
<div className="row">

<div className="col-sm-4">
<div class="card"  style={{width: "100%"}}>
  <img class="card-img-top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcIBwYHBw0QDgcGBxYPBgcRDw8NDQcRIBoXFiARHR8YKDEgGxolJx8cJTEtJSk8LjEuIyMzODkwNygyLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAADAAEFAgf/xAAeEAEBAAICAwEBAAAAAAAAAAAAEgIRASExUaGRQf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD4zKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUs0aWSAtLXJZUgLTCypASJKkBp7lSDwnqVIPKepZIOtLJNKkAypLKkAypLKkAypNLJAMqTSyQDKk0skBSyTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skBSyTSpAMsk0qQdWVJpZIClkmlkgKWSaVIBlkmlSAZZJpUgGVJZUgGVJZUgGVJpZIBlSaWSAZUmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUllSAZUmlkgGVJpZIOtKksqQDKksqQDKk0skAypNLJAUsk0skBSyTSyQFLJNKkAyyTSpAMsk0qQDKksqQDKksqQDKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypB1pZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUllSAZUmlkgGVJpZIClkmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUmlkgGVJpZIBlSaWSApZJpZIOtKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skBSyTSyQFLJNKkAyyTSpAMqSypAMqSypAMqSypB1pZJpUgGVJZUgGVJZUgGVJZUgGVJpZIBlSaWSAZUmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUmlkgGVJpZIBlSaWSApZJpZIClkmlSAZZJpUg6sqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqSypAMqTSyQDKk0skBSyTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skHWlSWVIBlSWVIBlSaWSAZUmlkgGVJpZIClkmlkgKWSaVIBlkmlSAZZJpUgGVJZUgGVJZUgGVJZUgGVJpZIBlSaWSApZJpZIClkmlkgKWSaVIBlkmlSAZUllSDrSyTSyQFLJNKkAyyTSpAMsk0qQDKksqQDKksqQDKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skHSSQJJAkkCSQLTNJAtLSQKWSkClSxApUsQKVKQMlSkDJUpApZKQKWSkClkpApZKQKVxjx3v10kDZw1359LnDDvvx9SBk4fP15yx4314/iQP/9k=" alt="Card image cap"/>
</div>
</div>


<div className="col-sm-4">
<div class="card" style={{width: "100%"}}>
  <img class="card-img-top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcIBwYHBw0QDgcGBxYPBgcRDw8NDQcRIBoXFiARHR8YKDEgGxolJx8cJTEtJSk8LjEuIyMzODkwNygyLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAADAAEFAgf/xAAeEAEBAAICAwEBAAAAAAAAAAAAEgIRASExUaGRQf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD4zKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUs0aWSAtLXJZUgLTCypASJKkBp7lSDwnqVIPKepZIOtLJNKkAypLKkAypLKkAypNLJAMqTSyQDKk0skBSyTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skBSyTSpAMsk0qQdWVJpZIClkmlkgKWSaVIBlkmlSAZZJpUgGVJZUgGVJZUgGVJpZIBlSaWSAZUmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUllSAZUmlkgGVJpZIOtKksqQDKksqQDKk0skAypNLJAUsk0skBSyTSyQFLJNKkAyyTSpAMsk0qQDKksqQDKksqQDKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypB1pZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUllSAZUmlkgGVJpZIClkmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUmlkgGVJpZIBlSaWSApZJpZIOtKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skBSyTSyQFLJNKkAyyTSpAMqSypAMqSypAMqSypB1pZJpUgGVJZUgGVJZUgGVJZUgGVJpZIBlSaWSAZUmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUmlkgGVJpZIBlSaWSApZJpZIClkmlSAZZJpUg6sqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqSypAMqTSyQDKk0skBSyTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skHWlSWVIBlSWVIBlSaWSAZUmlkgGVJpZIClkmlkgKWSaVIBlkmlSAZZJpUgGVJZUgGVJZUgGVJZUgGVJpZIBlSaWSApZJpZIClkmlkgKWSaVIBlkmlSAZUllSDrSyTSyQFLJNKkAyyTSpAMsk0qQDKksqQDKksqQDKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skHSSQJJAkkCSQLTNJAtLSQKWSkClSxApUsQKVKQMlSkDJUpApZKQKWSkClkpApZKQKVxjx3v10kDZw1359LnDDvvx9SBk4fP15yx4314/iQP/9k=" alt="Card image cap"/>
</div>
</div>




<div className="col-sm-4">
<div class="card" style={{width: "100%"}}>
  <img class="card-img-top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcIBwYHBw0QDgcGBxYPBgcRDw8NDQcRIBoXFiARHR8YKDEgGxolJx8cJTEtJSk8LjEuIyMzODkwNygyLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAADAAEFAgf/xAAeEAEBAAICAwEBAAAAAAAAAAAAEgIRASExUaGRQf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD4zKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUs0aWSAtLXJZUgLTCypASJKkBp7lSDwnqVIPKepZIOtLJNKkAypLKkAypLKkAypNLJAMqTSyQDKk0skBSyTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skBSyTSpAMsk0qQdWVJpZIClkmlkgKWSaVIBlkmlSAZZJpUgGVJZUgGVJZUgGVJpZIBlSaWSAZUmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUllSAZUmlkgGVJpZIOtKksqQDKksqQDKk0skAypNLJAUsk0skBSyTSyQFLJNKkAyyTSpAMsk0qQDKksqQDKksqQDKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypB1pZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUllSAZUmlkgGVJpZIClkmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUmlkgGVJpZIBlSaWSApZJpZIOtKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skBSyTSyQFLJNKkAyyTSpAMqSypAMqSypAMqSypB1pZJpUgGVJZUgGVJZUgGVJZUgGVJpZIBlSaWSAZUmlkgKWSaWSApZJpUgGWSaVIBlkmlSAZUllSAZUllSAZUmlkgGVJpZIBlSaWSApZJpZIClkmlSAZZJpUg6sqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqSypAMqTSyQDKk0skBSyTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skHWlSWVIBlSWVIBlSaWSAZUmlkgGVJpZIClkmlkgKWSaVIBlkmlSAZZJpUgGVJZUgGVJZUgGVJZUgGVJpZIBlSaWSApZJpZIClkmlkgKWSaVIBlkmlSAZUllSDrSyTSyQFLJNKkAyyTSpAMsk0qQDKksqQDKksqQDKk0skAypNLJAMqTSyQFLJNLJAUsk0qQDLJNKkAyyTSpAMqSypAMqSypAMqTSyQDKk0skAypNLJAUsk0skHSSQJJAkkCSQLTNJAtLSQKWSkClSxApUsQKVKQMlSkDJUpApZKQKWSkClkpApZKQKVxjx3v10kDZw1359LnDDvvx9SBk4fP15yx4314/iQP/9k=" alt="Card image cap"/>
</div>
</div>
</div>
<br/><br/>


<div className="row">
<div className="col-sm-6">


<div className="row">
<div className="col-sm-12">
<div class="card" style={{width: "auto"}}>
  <img class="card-img-top" src="https://www.xmple.com/wallpaper/linear-grey-gradient-1920x1080-c2-808080-a9a9a9-a-225-f-14.svg" alt="Card image cap"/>
</div>
</div>
</div>
</div>

<div className="col-xs-6">
<h3 style={{color:"dark-grey"}}><b>APP DEVELOPMENT</b></h3><br/>
<p><b> BY JOHN DOE</b></p>
<p style={{fontFamily:"serif"}}>Lorem ipsum dolor sit amet   consectetur<br/> adipiscing elit,sed do eiusmod temporlorem <br/> consectetur adipiscing elit,sed.</p>
<a><b>SEE MORE</b></a>
</div>
</div>
<br/>
<br/>
<div className="row">
<div className="col-sm-6">
<h3><b>AVALAN AGENCY</b></h3><br/>
<p><b> BY JOHN DOE</b></p>
<p style={{fontFamily:"serif"}}>Lorem ipsum dolor sit amet   consectetur<br/> adipiscing elit,sed do eiusmod temporlorem <br/> consectetur adipiscing elit,sed.</p>
<a><b>SEE MORE</b></a>
</div>
<div className="col-sm-6">
<div class="card" style={{width:"auto"}}>
  <img class="card-img-top" src="https://www.xmple.com/wallpaper/linear-grey-gradient-1920x1080-c2-808080-a9a9a9-a-225-f-14.svg" alt="Card image cap"/>
</div>
</div>
</div>
<br/><br/><br/>

<div className="row" style={{backgroundColor:"rgb(67,70,75)"}}>
<div className="col-sm-6"  align="center">
<img  class="card-img-top" id="image2" src="https://www.xmple.com/wallpaper/linear-grey-gradient-1920x1080-c2-808080-a9a9a9-a-225-f-14.svg" alt="Card image cap"/>
<h6 align="center" style={{color:"white"}}><b>MAILCHIMP READY</b></h6>
<p id="para4" align="center">Lorem ipsum dolor sit amet   consectetur<br/> adipiscing elit,sed do eiusmod temporlorem <br/> consectetur adipiscing elit,sed.</p>

</div>
<div className="col-sm-6" align="center">
<img  class="card-img-top" id="image2" src="https://www.xmple.com/wallpaper/linear-grey-gradient-1920x1080-c2-808080-a9a9a9-a-225-f-14.svg" alt="Card image cap"/>
<h6 align="center" style={{color:"white"}}><b>PREMIUM QUALITY</b></h6>
<p id="para4" align="center">Lorem ipsum dolor sit amet   consectetur<br/> adipiscing elit,sed do eiusmod temporlorem <br/> consectetur adipiscing elit,sed.</p>
</div>
</div>
<br/>
<br/>



<div className="row">
<div className="col-sm-12">
<h6 align="center"><b>AVALAN AGENCY</b></h6><br/>
<h1 align="center"><b>OUR SKILLS</b></h1><br/>
<hr className="hr" align="center"/>
<br/>
</div>
</div>

<div className="row">
<div className="col-sm-10">
<p align="left" style={{}}><b>WEB DESIGN</b></p>
</div>
<div className="col-sm-2">
<p><b>98%</b></p>
</div>
<div className="col-sm-12">
<div class="w3-border">
  <div class="w3-green" style={{height:"10px",width:"98%"}}></div>
</div>
</div><br/><br/>

<div className="col-sm-10">
<p align="left"><b>APP DEVELOPMENT</b></p>
</div>
<div className="col-sm-2"> 
<p><b>92%</b></p>
</div>
<div className="col-sm-12">
<div class="w3-border">
  <div class="w3-green" style={{height:"10px",width:"92%"}}></div>
</div>
</div><br/><br/>

<div className="col-sm-10">
<p align="left"><b>PHOTOGRAPHY</b></p>
</div>
<div className="col-sm-2"> 
<p><b>97%</b></p>
</div>
<div className="col-sm-12">
<div class="w3-border">
  <div class="w3-green" style={{height:"10px",width:"97%"}}></div>
</div>
</div>
</div>
<br/><br/><br/><br/>




<div className="row" >
<div className="col-sm-1" align="center"></div>
<div className="col-sm-4" id="col12"  align="center">
<h3><b>MAKE YOUR IDEA</b></h3>
<p><b>Cras mattis consectetur purus sit amet fermentum<br/>Cras mattis consectetur purus sit.</b></p>
<a><b>SEE MORE</b></a>
  </div>
  <div className="col-sm-2" align="center"></div>
<div className="col-sm-4" id="col13" align="center">
<h3><b>NEW EXPERIENCE</b></h3>
<p><b>Cras mattis consectetur purus sit amet fermentum<br/>Cras mattis consectetur purus sit.</b></p>
<a><b>SEE MORE</b></a>
</div>
<div className="col-sm-1" align="center"></div>
</div>
<br/>
<br/>
<div className="row" align="center">
<div className="col-sm-3" align="center"></div>
<div className="col-sm-6" id="col14" align="center">
<h3><b>PREPARE FOR NEW EXPERIENCE</b></h3><br/>
<hr className="hr"/><br/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod<br/>neque blandit aliquet sollicitudin, est arcu lacinia erat.</p><br/>
<button type="button" style={{backgroundColor:"green" , color:"white"}} class="btn btn-primary btn-lg">GET STARTED</button>
<button style={{margin:"10px" , backgroundColor:"white",color:"green"}} type="button" class="btn btn-secondary btn-lg">PURCHASE</button>
</div>
<div className="col-sm-3" align="center"></div>
</div>
<br/><br/>
<div className="row">
<div className="col-sm-12" >
<p align="center"><b>POWERFUL FEATURES</b></p>
<h1 align="center"><b>WE ARE CREATIVE AGENCY</b></h1>
</div>
</div>

<div className="row" >

<div className="col-sm-4"  align="center">
<div className="col15">
<h6><b>STARTER</b></h6>
<h1 style={{color:"green"}}><b>$14</b></h1>
<hr className="hr2"/>
<p style={{}}>10GB Disk Space</p>
<hr className="hr2"/>
<p>10GB Bandwidth</p>
<hr className="hr2"/>
<p>Free Technical Support</p>
<hr className="hr2"/><br/>
<button type="button" style={{backgroundColor:"green" , color:"white",outline:"none",border:"none"}} class="btn btn-primary btn-lg">LEARN MORE</button>
</div>
</div>


<div className="col-sm-4" align="center">
  <div className="col15">
  <h6><b>AGENCY</b></h6>
<h1 style={{color:"green"}}><b>$18</b></h1>
<hr className="hr2"/>
<p>10GB Disk Space</p>
<hr className="hr2"/>
<p>10GB Bandwidth</p>
<hr className="hr2"/>
<p>Free Technical Support</p>
<hr className="hr2"/><br/>
<button type="button" style={{backgroundColor:"green" , color:"white",outline:"none",border:"none"}} class="btn btn-primary btn-lg">LEARN MORE</button>
</div>
</div>

<div className="col-sm-4" align="center">
  <div className="col15">
  
<h6><b>ENTERPRISE</b></h6>
<h1 style={{color:"green"}}><b>$24</b></h1>
<hr className="hr2"/>
<p>10GB Disk Space</p>
<hr className="hr2"/>
<p>10GB Bandwidth</p>
<hr className="hr2"/>
<p>Free Technical Support</p>
<hr className="hr2"/><br/>
<button type="button" style={{backgroundColor:"green" , color:"white",outline:"none",border:"none"}} class="btn btn-primary btn-lg">LEARN MORE</button>
</div>
</div>
</div>
<br/><br/><br/><br/>




<div className="row">
<div className="col-xs-3" align="right" style={{margin:"auto"}}> 
<span className="dot2"></span>
</div>
<div className="col-xs-9" style={{margin:"auto"}}>
<b>RESPONSIVE READY</b><br/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend eu dolor non sodales<br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
</div>

<div className="row">
<div className="col-xs-3" align="right" style={{margin:"auto"}} >
<span className="dot2"></span>
</div>
<div className="col-xs-9" style={{margin:"auto"}} >
<b>CODE QUALITY </b><br/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend eu dolor non sodales<br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
</div>

<div className="row">
<div className="col-xs-3" align="right" style={{margin:"auto"}}>
<span className="dot2"></span>
</div>
<div className="col-xs-9" align="left" style={{margin:"auto"}}>
<b>EASY CUSTOMIZATION</b><br/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend eu dolor non sodales<br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
</div>
<br/><br/><br/>
<div className="row">
<div className="col-sm-3">
<img src="https://www.precisemedical.co.uk/wp-content/uploads/2017/05/grey-square.png" alt="..." class="img-thumbnail"></img>
</div>

<div className="col-sm-3">
<img src="https://www.precisemedical.co.uk/wp-content/uploads/2017/05/grey-square.png" alt="..." class="img-thumbnail"></img>
</div>

<div className="col-sm-3">
<img src="https://www.precisemedical.co.uk/wp-content/uploads/2017/05/grey-square.png" alt="..." class="img-thumbnail"></img>
</div>

<div className="col-sm-3">
<img src="https://www.precisemedical.co.uk/wp-content/uploads/2017/05/grey-square.png" alt="..." class="img-thumbnail"></img>
</div>
</div>
<br/><br/><br/>

<div className="row">
<div className="col-sm-12">
<h3 align="center"><b>WE ARE CREATIVE AGENCY</b></h3><br/>
<hr className="hr"/><br/>
<p align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend eu dolor non sodales<br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<br/>
</div>
</div>

<div className="row">

<div className="col-xs-3" align="center" style={{margin:'auto'}}>
<span className="dot3"></span>
</div>

<div className="col-xs-3" align="center" style={{margin:'auto'}}>
<span className="dot3"></span>
</div>

<div className="col-xs-3" align="center" style={{margin:'auto'}}>
<span className="dot3"></span>
</div>

<div className="col-xs-3" align="center" style={{margin:'auto'}}>
<span className="dot3"></span>
</div>
</div>
<br/><br/><br/>
<div className="row" >

<div className="col-sm-12" >
    <p style={{backgroundColor:"rgb(67,70,75)", color:"white",paddingTop:"60px" , paddingBottom:"60px"}} align="center">
   COPYRIGHT &copy; 2020. ALL RIGHTS RESERVED.<br/>
    YOU CAN <a>UNSUBSCRIBE</a> HERE
    </p>
    </div>
</div>




</div>
</div>
  </Container>
  );
}

export default App;
