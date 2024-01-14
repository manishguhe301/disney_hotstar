import loginBackground from '../assets/images/login-background.jpg';
import logoOne from '../assets/images/cta-logo-one.svg';
import logoTwo from '../assets/images/cta-logo-two.png';

const Login = () => {
  return (
    <section className='overflow-hidden flex flex-col text-center h-[100vh]'>
      <div className='mb-[10vw] w-full relative min-h-[100vh] box-border flex justify-center items-center flex-col py-20 px-10 h-full'>
        <div className='max-w-[650px] flex flex-col justify-center items-center w-full '>
          <img
            src={logoOne}
            alt='Logo One'
            className='mb-3 max-w-[600px] min-h-[1px] block w-full z-[1]'
          />
          <button className='font-bold text-[#f9f9f9] bg-[#0063e5] mb-3 w-full tracking-[1.5px] text-lg border border-transparent rounded hover:bg-[#0483ee] py-[16.5px]'>
            GET ALL THERE
          </button>
          <p className='text-[ hsla(0, 0%, 95.3%, 1)] text-[11px] my-0 mx-6 leading-6 tracking-[1.5px]'>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img
            src={logoTwo}
            alt='img2'
            className='max-w-[600px] mb-5 inline-block align-bottom w-full mt-5'
          />
        </div>
        <div
          style={{ backgroundImage: `url(${loginBackground})` }}
          className='h-full bg-top bg-cover bg-no-repeat absolute right-0 left-0 z-[-1]'
        />
      </div>
    </section>
  );
};

export default Login;
