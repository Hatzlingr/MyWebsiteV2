import { Typewriter } from 'react-simple-typewriter';
import profilePic from '../../assets/profile.png'; 
import SocialLinks from '../Reusable/SocialLinks'; 
import Button from '../Reusable/Button';

const HeroSection = () => {
  return (
    <section className="min-h-svh bg-white flex items-center px-6 md:px-16 py-12">
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-center w-full max-w-6xl mx-auto gap-10">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-black text-4xl md:text-5xl font-bold mb-4">
            Amirul Nur Cahyo
          </h1>
          <p className="text-black text-xl md:text-2xl font-medium mb-4">
            I'm a{' '}
            <span className="text-blue-500 font-semibold">
              <Typewriter
                words={['Student', 'Programmer', 'Designer']}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </p>
          <p className="text-black text-base md:text-lg">
            Informatics Engineering student passionate about web development and design.
          </p>
          <SocialLinks />
          <div className='flex justify-center md:justify-start'>
            <Button text="My Projects"/>
          </div>
        </div>

        <div className="flex p-12 justify-center">
          <img
            src={profilePic}
            alt="Amirul Nur Cahyo"
            className="w-50 h-50 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-blue-500"
          />
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;