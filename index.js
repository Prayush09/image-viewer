

function handleFileSelect() {
    const inputfile = document.getElementById("fileUpload");
    const file = inputfile.files[0];
    if (file) {
        // Create an img element
        const lastGalleryItem = document.querySelector(".gallery .gallery-item:last-child img");

// Get the id of the last image
        const lastImgId = parseInt(lastGalleryItem.id, 10);

// Increment the id for the new image
        const newId = lastImgId + 1;
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.alt = file.name; // Optional: Use file name as alt text
        img.id = newId;
        // Create a div to wrap the image
        const div = document.createElement('div');
        div.className = 'gallery-item'; // Optional: Add a class for styling

        // Append the image to the div
        div.appendChild(img);

        // Append the div to the gallery
        const gallery = document.querySelector('.gallery');
        gallery.appendChild(div);

        // Optionally, release the object URL when done
        URL.revokeObjectURL(imageUrl);
    }
}



