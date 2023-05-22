document.addEventListener('DOMContentLoaded', function() {
    var educationSection = document.getElementById('education');
    var experienceSection = document.getElementById('experience');
  
    // Cacher les sections initialement
    educationSection.style.display = 'none';
    experienceSection.style.display = 'none';
  
    // Ajouter des événements de clic pour afficher/masquer les sections
    document.getElementById('education-toggle').addEventListener('click', function() {
      educationSection.style.display = educationSection.style.display === 'none' ? 'block' : 'none';
    });
  
    document.getElementById('experience-toggle').addEventListener('click', function() {
      experienceSection.style.display = experienceSection.style.display === 'none' ? 'block' : 'none';
    });
  });