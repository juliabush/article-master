const cardSocialMedia = document.getElementById('color');
const socialMediaLeftFlexbox = document.getElementById('light');
const darkIcons = document.getElementById('dark');
const shareButton = document.getElementById('butt');

shareButton.addEventListener('click', function (){
    darkIcons.classList.toggle('active');
    socialMediaLeftFlexbox.classList.toggle('hidden');
    cardSocialMedia.classList.toggle('heya');
    shareButton.classList.toggle('queenshit');
});
