// Project Page
console.log("start")
// project page// Select the elements

document.addEventListener('DOMContentLoaded', function () {
    const shareBtn = document.getElementById("share-btn");
    const modal = document.getElementById("shareModal");
    const closeModal = document.getElementById("close-modal");
    const body = document.body; // Apply blur to the whole body

    // Open Modal
    shareBtn.addEventListener("click", () => {
        modal.style.display = "block"; // Show modal
        body.classList.add("blur-bg"); // Add blur effect
    });

    // Close Modal on Close Button
    closeModal.addEventListener("click", () => {
        closeModalFunction();
    });

    // Close Modal on Outside Click
    window.addEventListener("click", (event) => {
        if (!modal.contains(event.target) && event.target !== shareBtn) {
            closeModalFunction();
        }
    });

    // Function to Close Modal
    function closeModalFunction() {
        modal.style.display = "none"; // Hide modal
        body.classList.remove("blur-bg"); // Remove blur effect
    }

    // make icons working
    // Get the title dynamically from the DOM
    const projectTitle = document.querySelector(".project-name").textContent.trim();
    const startingMessage = "A small act of kindness can bring hope. Read about this urgent cause and make a difference:"
    // Share via WhatsApp
    document.getElementById("whatsapp").addEventListener("click", () => {
        const shareText = `${startingMessage} ${projectTitle}`;
        const shareLink = window.location.href; // Current page URL
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}%20${encodeURIComponent(shareLink)}`);
    });

    // Share via Facebook
    document.getElementById("facebook").addEventListener("click", () => {
        const shareLink = window.location.href; // Current page URL
        const shareText = `${startingMessage} ${projectTitle}`;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}&quote=${encodeURIComponent(shareText)}`);
    });

    // Share via Twitter
    document.getElementById("twitter").addEventListener("click", () => {
        const shareText = `${startingMessage} ${projectTitle}`;
        const shareLink = window.location.href; // Current page URL
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareLink)}`);
    });

    // Share via Instagram
    document.getElementById("instagram").addEventListener("click", () => {
        alert(`Instagram does not support direct sharing via the web.\nProject Title: ${projectTitle}`);
    });

    // Copy Link
    document.getElementById("copy-link").addEventListener("click", () => {
        const shareText = `${startingMessage} ${projectTitle}\n${window.location.href}`;
        navigator.clipboard.writeText(shareText).then(() => {
            alert("Title and link copied to clipboard!");
        });
    });

    // open and close qr modal
    const qrImage = document.getElementById('qr-code');
    const qrModal = document.getElementById('qrModal');
    const qrModalClose = document.getElementById('qr-modal-close');

    // Show modal on QR code click
    qrImage.addEventListener('click', () => {
        qrModal.style.display = 'flex';
    });

    // Hide modal on close button click
    qrModalClose.addEventListener('click', () => {
        qrModal.style.display = 'none';
    });

    // Hide modal when clicking outside the modal content
    qrModal.addEventListener('click', (e) => {
        if (e.target === qrModal) {
            qrModal.style.display = 'none';
        }
    });

    // Copy account details
    function copyText(elementId) {
        const textToCopy = document.getElementById(elementId) ? document.getElementById(elementId).textContent : document.querySelector(`#${elementId} strong`).textContent;

        // Copy to clipboard
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Show notification
            const notification = document.getElementById('copy-notification');
            notification.style.display = 'block';

            // Hide notification after 2 seconds
            setTimeout(() => {
                notification.style.display = 'none';
            }, 2000);
        }).catch((error) => {
            console.error('Failed to copy text:', error);
        });
    }
window.copyText=copyText;
});