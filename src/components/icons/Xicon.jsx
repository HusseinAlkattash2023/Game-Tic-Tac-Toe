import React from 'react';

function Xicon({color,size}){
  return (
    <div className={`icon ${color? 'icon-'+color : 'icon-blue'} ${size && 'icon-' + size}`}>
      <svg
      version="1.1"
      id="svg2" 
      x="0px" 
     y="0px" 
     width="100px" 
     height="100px"
	 viewBox="0 0 1200 1200" >
<path 
id="path18404" 
// inkscape:connector-curvature="0" 
d="M0,264.84L335.16,600L0,935.16L264.84,1200L600,864.84L935.16,1200
	L1200,935.16L864.84,600L1200,264.84L935.16,0L600,335.16L264.84,0L0,264.84z"/>
</svg>
    </div>
  )
}

export default Xicon
