document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start-retreat');
  const nextButton = document.getElementById('next-button');
  const prevButton = document.getElementById('prev-button');
  const returnStartButton = document.getElementById('return-start');

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

  function hideAllSections() {
    sections.forEach(section => section.classList.remove('active'));
  }

  function showSection(section) {
    section.classList.add('active');
  }

  if (!startButton || !nextButton || !prevButton || !returnStartButton) {
    console.error('One or more buttons not found.');
    return;
  }

  if (!introSection || !scriptureSection || !meditationSection || !closingSection) {
    console.error('One or more sections not found.');
    return;
  }


  startButton.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection(scriptureSection);
    currentSectionIndex = 1;
  });

  returnStartButton.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection(introSection);
    currentSectionIndex = 0;
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

  showCurrentSection();
});