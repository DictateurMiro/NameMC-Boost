// Function adBlock to block ads from namemc (24/03/2024)
// By DictateurMiro

function adBlock() {
  
  // allows you to reset the url to get the icons that are deleted because of adblock
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://s.namemc.com/fontawesome-5.15.4/css/all.min.css';
  document.head.appendChild(link);

  // block ad in the endpoint "minecraft-server"
  if (window.location.href.includes("minecraft-servers")) {
    const elementsToDelete = document.querySelectorAll('div.ad-container, div.mb-3');
    const skinWrapper = document.getElementById('skin_wrapper');
    
    if (skinWrapper) {
      skinWrapper.parentNode.removeChild(skinWrapper);
    }
    if (elementsToDelete.length > 0) {
      elementsToDelete.forEach(element => {
        element.parentNode.removeChild(element);
      });
    } else {
      setTimeout(adBlock, 1000);
    }
  } 
  
  // block ad in the rest of the site
  else {
    const elementsToDelete = document.querySelectorAll('div.ad-container, div.ad-container.mpu-container.d-none.d-md-flex.mb-3, div.default-creative-container, div.col-12.col-lg-4, div.mt-2.mb-3');
    const skinWrapper = document.getElementById('skin_wrapper');

    if (skinWrapper) {
      skinWrapper.parentNode.removeChild(skinWrapper);
    }

    if (elementsToDelete.length > 0) {
      elementsToDelete.forEach(element => {
        element.parentNode.removeChild(element);
      });
    } else {
      setTimeout(adBlock, 1000);
    }
  }
}

// function to deploy
adBlock();
