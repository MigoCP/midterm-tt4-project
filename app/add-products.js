document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        const photo = document.getElementById("productPhoto").files[0];
        const title = document.getElementById("productTitle").value.trim();
        const description = document.getElementById("productDescription").value.trim();
        const price = parseFloat(document.getElementById("productPrice").value);
        const quantity = parseInt(document.getElementById("productQuantity").value);

        if (!photo) {
            alert("Please upload a product photo.");
            return;
        }
        if (!title) {
            alert("Product title is required.");
            return;
        }
        if (!description) {
            alert("Product description is required.");
            return;
        }
        if (isNaN(price) || price <= 0) {
            alert("Please enter a valid price.");
            return;
        }
        if (isNaN(quantity) || quantity < 1) {
            alert("Please enter a valid quantity.");
            return;
        }

        const formData = new FormData();
        formData.append("photo", photo);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("quantity", quantity);

        fetch("/api/products", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert("Product added successfully!");
            form.reset();
        })
        .catch(error => {
            console.error("Error adding product:", error);
        });
    });
});
