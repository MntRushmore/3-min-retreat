document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start-retreat');
  const nextScriptureButton = document.getElementById('next-scripture');
  const nextMeditationButton = document.getElementById('next-meditation');
  const returnStartButton = document.getElementById('return-start');

  const introSection = document.getElementById('intro');
  const scriptureSection = document.getElementById('scripture');
  const meditationSection = document.getElementById('meditation');
  const closingSection = document.getElementById('closing');
  if (!startButton || !nextScriptureButton || !nextMeditationButton || !returnStartButton) {
    console.error('One or more buttons not found.');
    return;
  }

  if (!introSection || !scriptureSection || !meditationSection || !closingSection) {
    console.error('One or more sections not found.');
    return;
  }
  function hideAllSections() {
    introSection.classList.remove('active');
    scriptureSection.classList.remove('active');
    meditationSection.classList.remove('active');
    closingSection.classList.remove('active');
  }

  function showSection(section) {
    section.classList.add('active');
  }

  startButton.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection(scriptureSection);
  });

  nextScriptureButton.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection(meditationSection);
  });

  nextMeditationButton.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection(closingSection);
  });

  returnStartButton.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection(introSection);
  });
});