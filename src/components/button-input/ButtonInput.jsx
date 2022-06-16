import './button-input.scss'

const ButtonInput = ({handleImageUpload}) => {
    return (
        // <button className={`btn ${props.className}`}>
        //     {props.children}
        // </button>

        <label>
            <input type="file" onChange = {handleImageUpload}/>
            
        </label>
    )
}

export default ButtonInput