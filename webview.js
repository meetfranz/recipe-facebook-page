module.exports = (Franz, options) => {
  const getMessages = function getMessages() {
    let directs = 0;

    if (document.querySelector('#pages_manager_top_bar_container') && document.querySelector('._5zpb')) {
      // Messages:
      directs = parseInt(document.querySelector('._5zpb').innerText.replace(/[^0-9.]/g, ''), 10);
    }

    if (isNaN(directs)) {
      directs = 0;
    }

    Franz.setBadge(directs);
  };

  if (!document.body.classList.contains('UIPage_LoggedOut')) {
    Franz.loop(getMessages);
    if (localStorage.getItem('franz-needsRedirect')) {
      window.location.href = `https://facebook.com/${options.team}/inbox`;
      localStorage.removeItem('franz-needsRedirect');
    }
  } else {
    localStorage.setItem('franz-needsRedirect', true);
  }
};
