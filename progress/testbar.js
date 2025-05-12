<style>
  .progress-container {
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 8px;
    overflow: hidden;
    margin: 20px 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .progress-bar {
    height: 24px;
    width: 0%;
    background: linear-gradient(90deg, #0275d8, #5bc0de);
    color: white;
    text-align: center;
    line-height: 24px;
    font-weight: bold;
    transition: width 1s ease-in-out;
  }
</style>

<div class="progress-container">
  <div class="progress-bar" id="progressBar">0%</div>
</div>

<script>
  function setProgress(percent) {
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = percent + "%";
    progressBar.textContent = percent + "%";
  }

  // Example: Set project progress to 60%
  setTimeout(() => setProgress(60), 500);
</script>
