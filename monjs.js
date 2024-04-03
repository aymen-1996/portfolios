
const scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
const elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

const headerBtn = document.getElementById("header-btn");
const socialContact = document.getElementById("social-contact");
const contactForm = document.getElementById("contact");

function scrollToForm() {
  contactForm.scrollIntoView({ behavior: "smooth" }); // Top
}

if (headerBtn) {
    headerBtn.addEventListener("click", scrollToForm);
}
if (socialContact) {
    socialContact.addEventListener("click", scrollToForm);
}

const contactFormNoBots = document.getElementById("contact-form-no-bots");
document.addEventListener("DOMContentLoaded", function() {
    const contactFormNoBots = document.getElementById("contact-form-no-bots");
    if (contactFormNoBots && contactFormNoBots.parentNode) {
        contactFormNoBots.parentNode.removeChild(contactFormNoBots);
    }
});


var popupsOuverts = [];

function ouvrirPopup(videoId, videoUrl) {
    fermerTousLesPopups();

    var popupContainer = document.getElementById("popup" + videoId);
    var iframeElement = popupContainer.querySelector("iframe");

    if (iframeElement) {
        iframeElement.src = videoUrl; 
    }

    popupContainer.style.display = "block"; 
    popupsOuverts.push(popupContainer); 
}

function fermerPopup(videoId) {
    var popupContainer = document.getElementById("popup" + videoId);
    var videoElement = popupContainer.querySelector("video");
    var iframeElement = popupContainer.querySelector("iframe");

    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0; 
    }

    if (iframeElement) {
        iframeElement.src = "";
    }

    popupContainer.style.display = "none";
    
    var index = popupsOuverts.indexOf(popupContainer);
    if (index !== -1) {
        popupsOuverts.splice(index, 1); 
    }
}

function fermerTousLesPopups() {
  popupsOuverts.forEach(function(popup) {
      popup.style.display = "none";
      
      var videoElement = popup.querySelector("video");
      if (videoElement) {
          videoElement.pause();
          videoElement.currentTime = 0; 
      }

      var iframeElement = popup.querySelector("iframe");
      if (iframeElement) {
          iframeElement.src = "";
      }
  });
  popupsOuverts = [];
}


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image-with-button');

    images.forEach(function(image) {
        const button = image.querySelector('.image-button');

        image.addEventListener('mouseenter', function() {
            button.style.display = 'block';
        });

        image.addEventListener('mouseleave', function() {
            button.style.display = 'none';
        });

        image.addEventListener('click', function() {
            image.classList.toggle('clicked');
        });
    });
});

