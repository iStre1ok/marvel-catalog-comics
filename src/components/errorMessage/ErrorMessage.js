import img from './error.gif'
import './errorMessage.scss'

const ErrorMessage = () => {
    return (
        <img className='img-error' src={img} alt="error" />
    )
}

export default ErrorMessage;