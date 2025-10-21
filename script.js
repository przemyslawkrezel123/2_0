(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    //TODO
    answer.innerHTML = '<p class="loading">ładowanie...</p>';

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        answer.innerHTML = '';

        posts.forEach(post => {
          const div = document.createElement('div');
          div.classList.add('post');
          div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          `;
          answer.appendChild(div);
        });
      })
 
  })

  cw2.addEventListener("click", function () {
    //TODO
    
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
