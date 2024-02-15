import img from '../assets/bg.jpg'

export default function Home() {
  return (<>
    <title>Home</title>
    <style>
    {`body{
      background-image: url(${img});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      margin: 0;
    }`}
    </style>
    </>)
}
