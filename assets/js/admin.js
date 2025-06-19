function unlockAdmin() {
  const pass = document.getElementById('admin-pass').value;
  if (pass === 'admin123') {
    fetch('data/coins.json')
      .then(res => res.text())
      .then(data => {
        document.getElementById('admin-panel').style.display = 'block';
        document.getElementById('json-input').value = data;
      })
      .catch(err => alert('Error loading JSON: ' + err));
  } else {
    alert('Incorrect password!');
  }
}

function saveData() {
  alert("Saving not supported on GitHub Pages. Please copy the edited JSON and manually update it in GitHub.");
}
