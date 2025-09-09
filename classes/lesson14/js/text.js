const text = `Here are some of the most popular hashtags I am currently following:  
#web #coding #2025 #javascript #frontend #development #learning #projects  
#hillel #html #css #react #nodejs #design #ui #ux #app #site #code #dev #windows #education  
#community #innovation #technology #software #programming #engineer #challenge #growth #skills #future  

Today's date is 08.09.2025. This is a great moment to continue learning and improving coding skills, as well as to explore new opportunities in web development.  

Check out these useful websites for practice and knowledge:  
https://www.example.com – a sample domain for testing.  
https://github.com – a platform for hosting and sharing code.  
https://www.hillel.ua – a resource for learning and courses.  
https://www.google.com – the most popular search engine.  
https://www.microsoft.com – official Microsoft site with tools and products.  
https://www.wikipedia.org – free online encyclopedia.  
https://www.stackoverflow.com – community for programmers’ questions and answers.  
https://www.npmjs.com – Node.js package registry.  
https://www.reddit.com – social news and discussion platform.  
https://www.youtube.com – video tutorials and tech channels.  
https://www.freecodecamp.org – free coding lessons.  
https://www.codecademy.com – interactive coding courses.  
https://www.udemy.com – online learning platform.  
https://www.coursera.org – academic online courses.  
https://www.linkedin.com – professional networking site.  
https://www.medium.com – articles and blogs on technology.  
https://www.tutorialspoint.com – quick tutorials.  
https://www.w3schools.com – reference for HTML, CSS, JavaScript.  
https://www.ecma-international.org – official JavaScript standards.  

These resources are part of my daily routine for learning and staying updated with the latest trends in development.
11.09.2025
`;


console.log(text);


const hashtags = text.match(/#\w+/g);
console.log("Hashtags:", hashtags.join(", "));


const dates = text.match(/\d\d.\d\d.\d\d\d\d/g);
console.log("Dates:", dates.join(", "));


const links = text.match(/https:\/\/[a-z.]+/g); 
console.log("Links:", links.join(", "));