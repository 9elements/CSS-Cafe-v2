const dialogTriggers = document.querySelectorAll(".js-dialog-trigger");

dialogTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const dialog = document.getElementById(
      trigger.getAttribute("aria-controls")
    );
    // Append dialog id to the URL
    history.pushState(null, null, `#${dialog.id}`);
    dialog.showModal();

    addCloseListeners(dialog);
  });
});

function addCloseListeners(dialog) {
  dialog.addEventListener(
    "close",
    () => {
      // Remove dialog id from the URL
      history.pushState(null, null, window.location.pathname);
      const trigger = document.querySelector(`[aria-controls="${dialog.id}"]`);
    },
    { once: true }
  );

  // On click outside the dialog
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}

// On page load
document.addEventListener("hashchange", () => {
  const dialog = document.getElementById(location.hash.slice(1));
  if (dialog) {
    dialog.showModal();
    addCloseListeners(dialog);
  }

  // Close dialog when the hash is removed or changed
  if (!location.hash) {
    const openDialog = document.querySelector("dialog[open]");
    openDialog.close();
  }
});

// On back button click
window.addEventListener("popstate", () => {
  const openDialog = document.querySelector("dialog[open]");
  if (openDialog) {
    openDialog.close();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById(location.hash.slice(1));
  if (dialog) {
    dialog.showModal();
    addCloseListeners(dialog);
  }
});
