// Function to smoothly scroll to an element
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Event listeners for navigation links
document.getElementById('tombolHome').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#pageHome');
});

document.getElementById('tombolTentang').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#pembatas1');
});

document.getElementById('tombolDaftar').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#pembatas2');
});

// Event listener for the "Daftar Sekarang" button
document.getElementById('btnDaftarSekarang').addEventListener('click', function() {
    smoothScroll('#pembatas2');
});
