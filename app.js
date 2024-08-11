const paragraph = document.getElementById("text");
      const poetryElement = document.getElementById("poetry");
      const button = document.getElementById("changeTextButton");

      button.addEventListener("click", function () {
        if (poetryElement.style.display === "none") {
          poetryElement.innerHTML = `
                    <p>"Two roads diverged in a wood, and I—<br>
                    I took the one less traveled by,<br>
                    And that has made all the difference."</p>
                    <p>- Robert Frost</p>
                `;
          poetryElement.style.display = "block";
          button.textContent = "Hide Poetry";
          paragraph.textContent = "The text has been changed!";
        } else {
          poetryElement.style.display = "none";
          button.textContent = "Show Poetry";
          paragraph.textContent = "This is the initial text.";
        }
      });