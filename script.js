document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start-retreat');
  const nextScriptureButton = document.getElementById('next-scripture');
  const nextMeditationButton = document.getElementById('next-meditation');
  const returnStartButton = document.getElementById('return-start');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  const introSection = document.getElementById('intro');
  const scriptureSection = document.getElementById('scripture');
  const meditationSection = document.getElementById('meditation');
  const closingSection = document.getElementById('closing');
  const sections = [introSection, scriptureSection, meditationSection, closingSection];
  let currentSectionIndex = 0;

  function showCurrentSection() {
    hideAllSections();
    showSection(sections[currentSectionIndex]);
  }

  if (!startButton || !nextScriptureButton || !nextMeditationButton || !returnStartButton || !prevButton || !nextButton) {
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

  nextButton.addEventListener('click', function () {
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      showCurrentSection();
    }
  });

  prevButton.addEventListener('click', function () {
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
      showCurrentSection();
    }
  });
});