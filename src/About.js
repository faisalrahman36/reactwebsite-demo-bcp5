import React from 'react';
import "./App.css"
function About({id })  {
  return (
    <div id={id}>
      <h2>This is just a demo website meant for learning only. Images and content are not claimed by
        me and and owned by their respective creators.
      </h2>
      <p>

      I am a student of astrophysics and cosmology who is also interested in software development.
      <br/>You can visit my Git profile: <a href="https://github.com/faisalrahman36/">https://github.com/faisalrahman36/</a>
</p>

    </div>
  );
}

export default About;