document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close-btn");

  const projects = {
    "F35-Plane": `
      <h2>RC controlled airplane</h2>
      <p>This is a project about building a F35b Lighting II with VTOL</p>
      <ul>
        <li>3D Modeling The Frame</li>
        <li>Airfoil Analysis</li>
        <li>Custom Build Flight Controller</li>
        <li>Material Decision</li>
        <li>Actually Building The Plane</li>
        <li>Test Flight</li>
        <li>Maiden Flight</li>
      </ul>
      <br>
      <h3>Tools used:</h3>
      <p>VSCode, C, Github, Our Big Brain</p>
    `,
    "Live-CDF": `
      <h2>A Working Live CDF</h2>
      <p>This is a project where me and my buddy build a live CDF that can analyze aerodynamics in real time.</p>
      <ul>
        <li>Aerodynamic Analysis</li>
        <li>Fluid-dynamic Analysis</li>
        <li>Custom Physics Engine</li>
        <li>Frame By Frame Analysis</li>
        <li>AI Live Model Helper</li>
        <li>3D Live View</li>
      </ul>
      <h3>Tools used:</h3>
      <p>VSCode, C, Github, Our Big Brain</p>
    `
  };

  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const projectKey = card.getAttribute("data-project");
      modalBody.innerHTML = projects[projectKey];
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
