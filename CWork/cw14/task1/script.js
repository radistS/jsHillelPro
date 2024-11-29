document.addEventListener("DOMContentLoaded", () => {
  const createModal = (title, content) => {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", () => modal.remove());

    const modalTitle = document.createElement("h2");
    modalTitle.textContent = title;

    const modalBody = document.createElement("p");
    modalBody.textContent = content;

    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.remove();
      }
    });

    document.body.appendChild(modal);

    modal.style.display = "flex";
  };

  const openModalButtons = document.querySelectorAll(".open-modal");
  openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
      const title = button.getAttribute("data-title");
      const content = button.getAttribute("data-content");
      createModal(title, content);
    });
  });
});
