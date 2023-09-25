const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html', 'text/css');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Demo Website</title>
      <link rel="stylesheet" href="demoPage.css">
      <script href="demoPage2.js"></script>
  </head>
  <body>
      <header>
      <div id="nav">
          <nav>
              <ul type="none" id="navList">
                  
                  <li>
                      <a href="">Home</a>
                  </li>
                  <li>
                      <a href="">Helpline</a>
                  </li>
                  <li>
                      <a href="#infoBar">Contact Us</a>
                  </li>
                  <li>
                      <a href="#headQuiz">Take a Quiz</a>
                  </li>
  
              </ul>
          </nav>
          
      </div>
      <hr>
  </header>
  <img src="/images/qoute.jpg" alt="Couldn't load image" id="quote">
  <div id="gyaan">
      <h1>Mental Health</h1>
      
      <p>
          Mental health is a topic that is receiving more and more attention in the public sphere. This is due to the growing awareness of the importance of mental health, as well as the prevalence of mental illness. Mental health is essential to our overall well-being, and it is important to take care of our mental health just as we would our physical health. There are many ways to promote mental health, and it is important to find what works for you. Taking care of your mental health will not only improve your own life, but also the lives of those around you.
      </p>
  </div>
  
  <div id="whyQuiz">
      <h2>Why take our quiz</h2>
      <p>In today's fast-paced world, mental health has become a topic of increasing concern. The stresses and challenges of daily life can take a toll on our emotional and psychological well-being. Recognizing the importance of mental health and taking steps to maintain it is crucial for living a fulfilling life. One valuable tool for assessing and improving your mental wellbeing is a well-structured quiz. In this article, we'll explore why you should consider taking a quiz on mental wellbeing and how it can benefit you.
      </p>
  </div>
  <br>
  <h2 id="headMental">
      Attempt our quiz for Mental health analysis
  </h2>
  
  <div class="container">
      <div id="takeQuiz">
          <h1 id="headQuiz">Take Our Quiz !</h1>
      </div>
      <form action="">
          
      </form>
          
      </div>
      
      <br>
  
  
      <div id="justOne">
          <form id="form1" action="#">
              1. Enter your details
              <ul type="square">
              <li>Name <br> <input type="text" name="name" placeholder="Name..."></li>
              <br><li>Enter your email <br>
                  <input type="email" name="email" placeholder="Email..."></li>
                  <br><li>
                      Date of Birth <br><input name="date" type="date">
                  </li>
                  <br><li>Place Currently Living in:<br> 
                      <input type="text" name="location" placeholder="Locaton..."></li>
                      <br>
  
                      <a href="#">
                      <button id="submitButt" onclick=tellUs()>Submit </button>
                      </a>
              </ul>
              </form>
  </div>
  <script>
      tellUs()
      {
          alert("Hello Motherfucker");
      }
  </script>
  
  
  <div id="infoBar">
  
      <ul type="none">
          <li class="ll" id="ll1">
              <ul type="none">
                  <li>
                      <a href="">Home</a>
                  </li>
                  <li>
                      <a href="">Helpline</a>
                  </li>
                  <li>
                      <a href="">Contact Us</a>
                  </li>
              </ul>
          </li>
          <li class="ll" id="ll2">
              Email for contacting
              <br>
              <br>
              Toll free number
          </li>
      </ul>
  
  </div>
  
  </body>
  </html>`);
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
