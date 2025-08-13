import errorImg from '../assets/error.gif';

const ErrorMessage = () => {
  return <img src={errorImg} alt='Error' className='object-contain w-100h-100' />;
};

export default ErrorMessage;
