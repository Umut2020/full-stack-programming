import './Profil.css'
import image from './image.jpg'

export default function Proofil () {
  return (

    <div class='center'>
      <div class='avatar'>
        <img src={image} alt='face' />
      </div>
      <div class='content'>
        <h1>Cristiano Ronaldo</h1>
        <h2>Full-Stack Developer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque modi alias sunt necessitatibus maxime eum delectus illo voluptatum error dolor?
        </p>
        <h3>Contact Me</h3>
      </div>
      <div class='social'>
        <a href='https://www.facebook.com/'><i class='fab fa-facebook'></i></a>
        <a href='https://mail.google.com/'><i class='far fa-envelope'></i></a>
        <a href='https://www.linkedin.com/'><i class='fab fa-linkedin'></i></a>
      </div>
    </div>

  )
}
