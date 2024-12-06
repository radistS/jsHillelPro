document.addEventListener("DOMContentLoaded", () => {
  const userTable = document.getElementById("user-table");
  const overlay = document.getElementById("overlay");
  const addEditPopup = document.getElementById("add-edit-popup");
  const viewPopup = document.getElementById("view-popup");
  const viewData = document.getElementById("view-data");
  const openAddPopupButton = document.getElementById("open-add-popup");
  const cancelPopupButton = document.getElementById("cancel-popup");
  const saveUserButton = document.getElementById("save-user");
  const closeViewPopupButton = document.getElementById("close-view-popup");

  const showModal = (modal) => {
    modal.classList.add("active");
    overlay.classList.add("active");
  };

  const closeModal = (modal) => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  };

  const loadUsers = () => JSON.parse(localStorage.getItem("users")) || [];
  const saveUsers = (users) => localStorage.setItem("users", JSON.stringify(users));

  const renderUsers = () => {
    const users = loadUsers();
    userTable.innerHTML = "";
    users.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.phone}</td>
        <td>${user.age}</td>
        <td class="actions">
          <i class="fas fa-eye" onclick="viewUser(${user.id})"></i>
          <i class="fas fa-edit" onclick="editUser(${user.id})"></i>
          <i class="fas fa-trash-alt" onclick="removeUser(${user.id})"></i>
        </td>
      `;
      userTable.appendChild(row);
    });
  };

  openAddPopupButton.addEventListener("click", () => {
    document.getElementById("user-id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("age").value = "";
    showModal(addEditPopup);
  });

  cancelPopupButton.addEventListener("click", () => closeModal(addEditPopup));

  saveUserButton.addEventListener("click", (e) => {
    e.preventDefault();
    const id = document.getElementById("user-id").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;

    const users = loadUsers();

    if (id) {
      const userIndex = users.findIndex((u) => u.id === parseInt(id));
      if (userIndex !== -1) {
        users[userIndex] = { id: parseInt(id), name, phone, age };
      }
    } else {
      users.push({ id: Date.now(), name, phone, age });
    }

    saveUsers(users);
    renderUsers();
    closeModal(addEditPopup);
  });

  window.viewUser = (id) => {
    const users = loadUsers();
    const user = users.find((u) => u.id === id);
    if (user) {
      const formattedJSON = JSON.stringify(user, null, 2);
      viewData.innerHTML = `<pre> ${syntaxHighlight(formattedJSON)} </pre>`;
      showModal(viewPopup);
    }
  };

  function syntaxHighlight(json) {
    if (typeof json !== "string") {
      json = JSON.stringify(json, null, 2);
    }
    json = json.replace(
        /("(\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(\.\d+)?([eE][+-]?\d+)?)/g,
        (match) => {
          let cls = "number";
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = "key";
            } else {
              cls = "string";
            }
          } else if (/true|false/.test(match)) {
            cls = "boolean";
          } else if (/null/.test(match)) {
            cls = "null";
          }
          return `<span class="${cls}">${match}</span>`;
        }
    );
    return json;
  }

  window.editUser = (id) => {
    const users = loadUsers();
    const user = users.find((u) => u.id === id);
    if (user) {
      document.getElementById("user-id").value = user.id;
      document.getElementById("name").value = user.name;
      document.getElementById("phone").value = user.phone;
      document.getElementById("age").value = user.age;
      showModal(addEditPopup);
    }
  };

  window.removeUser = (id) => {
      const users = loadUsers().filter((u) => u.id !== id);
      saveUsers(users);
      renderUsers();
  };

  closeViewPopupButton.addEventListener("click", () => closeModal(viewPopup));

  renderUsers();
});
