/* ---------------------PART AAINII--------------------------------------------- */
/* ---------------------PART AAINII--------------------------------------------- */
/* ---------------------PART AAINII--------------------------------------------- */
/* ---------------------SAMBUNG BAWAH LINE NI----------------------------------- */

// Function to toggle the sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}

// Function to scroll to the top smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide the scroll-to-top button based on scroll position
window.onscroll = function () {
  const scrollBtn = document.querySelector(".scroll-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Countdown Timer
    function updateCountdown() {
      function setTargetTime() {
        // Set a new target time (example: 48 hours from now)
        return new Date().getTime() + 48 * 60 * 60 * 1000;
      }

      function update() {
        const currentTime = new Date().getTime();
        const distance = targetTime - currentTime;

        if (distance >= 0) {
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
          document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
          document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
          // Reset the target time and continue
          targetTime = setTargetTime();
        }
      }

      let targetTime = setTargetTime();
      update();
      const timer = setInterval(update, 1000);  // Update every second
    }

    // Start the countdown when the page loads
    window.onload = updateCountdown;

// Function to send the email and show the success message
function handleFormSubmit(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const email = document.getElementById('email').value.trim();
  const membership = document.getElementById('membership').value;
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();

  // Validate required fields
  if (!firstName || !email || !membership) {
    alert('Please fill in all required fields.');
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

 // Show success message with animation
const existingMsg = document.querySelector('.success-msg');
if (existingMsg) existingMsg.remove();

// Create a new success message element
const successMsg = document.createElement('div');
successMsg.className = 'success-msg';
successMsg.style.cssText = `
  background: linear-gradient(90deg, #28a745, #3c9d5f);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-top: 1.5rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transform: scale(0.8);
  animation: fadeIn 0.8s ease-in-out, bounce 0.8s 0.5s forwards;
`;

// Add a message text
successMsg.textContent = '🎉 Registration Successful! Welcome to ApexStreet Elite! 🎉';

// Append the success message to the form
event.target.appendChild(successMsg);

// Animation keyframes for fade-in and bounce
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes fadeIn {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes bounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
`, styleSheet.cssRules.length);

  // Prepare the email body
  const subject = 'ApexStreet Registration - ' + firstName;
  const body = `Hello,\n\nYou have successfully registered for ApexStreet Elite!\n\nMembership: ${membership}\nFirst Name: ${firstName}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`;
  const mailtoLink = `mailto:nabilahaini36@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the email client with pre-filled details
  window.location.href = mailtoLink;
}

// Add event listener to the form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.register-form');
  form.addEventListener('submit', handleFormSubmit);
});

// Function to toggle the sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}

// Function to scroll to the top smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide the scroll-to-top button based on scroll position
window.onscroll = function () {
  const scrollBtn = document.querySelector(".scroll-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Function to reveal elements when they are in view
function revealElementsOnScroll() {
  const welcomeBanner = document.getElementById("welcomeBanner");
  const bannerTitle = document.getElementById("bannerTitle");
  const countdownTimer = document.querySelector(".countdown-timer");

  const elements = [welcomeBanner, bannerTitle, countdownTimer];

  elements.forEach((element) => {
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add("visible");
      }
    }
  });
}

// Add event listener for scroll to handle element reveal
window.addEventListener("scroll", revealElementsOnScroll);

// Call the function initially to check if elements are already in view
revealElementsOnScroll();



// Add event listeners for hover effect on review cards
document.addEventListener("DOMContentLoaded", () => {
  const reviewCards = document.querySelectorAll(".review-card");
  reviewCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.backgroundColor = "#f0f8ff";
    });
    card.addEventListener("mouseleave", () => {
      card.style.backgroundColor = "white";
    });
  });
});

const meteorShower = document.getElementById('meteor-shower');

function createMeteor() {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');

    meteor.style.left = `${Math.random() * 100}vw`;
    meteor.style.top = `${Math.random() * 100}vh`;

    const size = Math.random() * 5 + 5;
    meteor.style.width = `${size}px`;
    meteor.style.height = `${size}px`;

    const speed = Math.random() * 2 + 1;
    meteor.style.animationDuration = `${speed}s`;

    const colors = ['darkblue', 'purple', 'cyan', 'yellow'];
    meteor.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    meteorShower.appendChild(meteor);

    setTimeout(() => {
        meteor.remove();
    }, speed * 1000);
}

setInterval(createMeteor, 150);
