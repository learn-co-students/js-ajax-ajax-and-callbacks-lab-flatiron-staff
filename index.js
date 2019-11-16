$(document).ready(function (){



});

function displayError() {
  const div = document.querySelector('#errors');
  div.innerHTML = 'error';
}

function searchRepositories() {
  const searchTerms = document.querySelector('#searchTerms').value;
  const url = `https://api.github.com/search/repositories?q=${searchTerms}`;

  $.get(url, function(response) {
      response.items.forEach(item => {
        $('#results').append(`<p>${item.name}</p>`);
      });
    })
    .fail(function(err) { displayError() });
}

function showCommits(el) {
  const url = `https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`;

  $.get(url, function(response) {
    response.forEach(item => {
      $('#details').append(`<p>${item.sha}</p>`)
    });
  })
}
