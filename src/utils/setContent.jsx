import ErrorMessage from '../components/ErrorMessage';
import { PuffLoader } from 'react-spinners';
const setContent = (process, renderFunction) => {
  switch (process) {
    case 'loading':
      return (
        <div className='flex justify-center items-center w-full h-80 '>
          <PuffLoader color='#FFDB63' size={120} />
        </div>
      );
    case 'confirmed':
      return renderFunction();
    case 'error':
      return (
        <div className='flex justify-center items-center w-full h-80'>
          <ErrorMessage />
        </div>
      );
    default:
      throw new Error('Unexpected process state');
  }
};

export default setContent;
