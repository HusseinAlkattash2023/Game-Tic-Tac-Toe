import React  from 'react';
function Restart() {
  return (

    <div className='restart'>
        <h3 className='restart__title'>Restart Game ?</h3>
        <div className='restart__btns'>
            <button className='btn btn-sm'>No, cancel</button>
            <button className='btn btn-sm btn-yellow'>yes, restart</button>
        </div>
    </div>
  )
}

export default Restart
