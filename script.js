async function fetchUsers() {
  const userList = document.getElementById('userList');
  userList.innerHTML = 'Loading...';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Network response was not ok');
    const users = await response.json();

    userList.innerHTML = ''; // Clear loading text
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.className = 'user-card';
      userDiv.innerHTML = `
        <strong>${user.name}</strong><br/>
        Email: ${user.email}<br/>
        Address: ${user.address.street}, ${user.address.city}
      `;
      userList.appendChild(userDiv);
    });
  } catch (error) {
    userList.innerHTML = `<p style="color:red;">Error fetching users: ${error.message}</p>`;
  }
}

// Attach the reload button click handler here
document.getElementById('reloadBtn').addEventListener('click', fetchUsers);

// Load users on initial page load
window.onload = fetchUsers;
