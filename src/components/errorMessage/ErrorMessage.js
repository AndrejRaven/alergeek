import img from './error.gif';
import { useNavigate } from 'react-router-dom';

const ErrorMessage = () => {
	const back = useNavigate();
	return (
		<>
			<img style={{
				display: 'block',
				width: '250px',
				height: '250px',
				objectFit: 'contain',
				margin: '0 auto'
			}}
				src={img} alt="Error" />
			<p style={{ margin: '0 auto'}}>Something went wrong. Please go <a href="back" onClick={() => back(-1)}>back</a> to previos page</p>
		</>

	)
}

export default ErrorMessage;