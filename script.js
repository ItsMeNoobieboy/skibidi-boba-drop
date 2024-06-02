let lorem = "Skibidi. Skibidi. Skibidi. <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function hello() {
  // alert('Skibidi. Skibidi. Skibidi.');
  const text = document.getElementById("clickhere");
  text.innerHTML += lorem.split(" ")[0] + " ";
  lorem = lorem.substring(lorem.indexOf(" ") + 1);
}