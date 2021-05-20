"use strict";

function Homepage() {
  return (
    <div>
      Welcome to Trading Cards! <br></br>
      <a href='/cards'>View Cards</a><br></br>
      <img id="welcome" src="/static/img/balloonicorn.jpg" />
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
