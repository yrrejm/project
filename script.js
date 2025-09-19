document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");
    const span = document.getElementsByClassName("close")[0];

    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = item.dataset.src;
            captionText.innerHTML = item.dataset.description;
        });
    });

    span.addEventListener('click', () => {
        modal.style.display = "none";
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
