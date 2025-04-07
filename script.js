document.addEventListener('DOMContentLoaded', function () {
  const prevStepButtons = document.querySelectorAll('#prev-step');
  const nextStepButtons = document.querySelectorAll('#next-step');
  const returnStartButton = document.getElementById('return-start');

  const notificationButton = document.getElementById('notification-button');
  const favoritePartButtons = document.querySelectorAll('#favorite-part-button');

  const playPauseButton = document.getElementById('play-pause-button');
  const backgroundMusic = document.getElementById('background-music');
  let isPlaying = false;

  const introSection = document.getElementById('intro');
  const scriptureSection = document.getElementById('scripture');
  const meditationSection = document.getElementById('meditation');
  const closingSection = document.getElementById('closing');
  const sections = [introSection, scriptureSection, meditationSection, closingSection];
  let currentSectionIndex = 0;

  function showCurrentSection() {
    hideAllSections();
    showSection(sections[currentSectionIndex]);

    prevStepButtons.forEach(button => {
      button.style.display = currentSectionIndex === 0 ? 'none' : 'inline-block';
    });
    nextStepButtons.forEach(button => {
      button.style.display = currentSectionIndex === sections.length - 1 ? 'none' : 'inline-block';
    });
  }

  function hideAllSections() {
    sections.forEach(section => section.classList.remove('active'));
  }

  function showSection(section) {
    section.classList.add('active');
  }

  prevStepButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      if (currentSectionIndex > 0) {
        currentSectionIndex--;
        showCurrentSection();
      }
    });
  });

  nextStepButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        showCurrentSection();
      }
    });
  });

  if (returnStartButton) {
    returnStartButton.addEventListener('click', function (e) {
      e.preventDefault();
      currentSectionIndex = 0;
      showCurrentSection();
    });
  } else {
    console.error('Return to start button not found.');
  }

  if (notificationButton) {
    notificationButton.addEventListener('click', function (e) {
      e.preventDefault();
      alert('A daily calm reminder will be sent (this is a pretend feature for now!).');
      // In a real website, you would implement actual notification logic here.
    });
  }

  favoritePartButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const favorite = prompt('Type a sentence or two you found helpful:');
      if (favorite) {
        alert('Your thought has been saved (just in your browser for now!).');
        // In a real website, you might save this to local storage.
      }
    });
  });

  if (playPauseButton && backgroundMusic) {
    playPauseButton.addEventListener('click', function() {
      if (isPlaying) {
        backgroundMusic.pause();
        playPauseButton.textContent = 'Play';
      } else {
        backgroundMusic.play();
        playPauseButton.textContent = 'Pause';
      }
      isPlaying = !isPlaying;
    });
  }

  showCurrentSection();
});