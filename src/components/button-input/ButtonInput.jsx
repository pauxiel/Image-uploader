import './button-input.scss'

const ButtonInput = ({handleImageUpload}) => {
    return (
       <>
         <div className = 'ortext'>or</div>
        <label className = 'button__label'>
            <input className = 'button__hidden' type="file" onChange = {handleImageUpload}/>
               Choose a File
        </label>
       
       </>

        
    )
}

export default ButtonInput