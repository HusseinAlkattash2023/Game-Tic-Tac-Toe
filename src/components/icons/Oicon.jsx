import React from 'react'

function Oicon({color,size}){
  return (
    <div className={`icon ${color? 'icon-'+color : 'icon-yellow'} ${size && 'icon-' + size}`}>
     <svg 
     version="1.1"
     id="svg2" 
     x="0px" 
     y="0px" 
     width="100px" 
     height="100px"
	 viewBox="0 0 1200 1200" >
<path 
  id="path18171"  
  d="M600,1200C268.65,1200,0,931.35,0,600C0,268.65,268.65,0,600,0
	c331.35,0,600,268.65,600,600C1200,931.35,931.35,1200,600,1200z M600,300c-165.675,0-300,134.325-300,300s134.325,300,300,300
	s300-134.325,300-300S765.675,300,600,300z"/>
</svg>
    </div>
  )
}

export default Oicon