let image = Array.from(document.querySelectorAll(".page .personal-info img"));

let closeBtn = document.querySelector(".page .image-viewer i");

let vImage = document.querySelector(".page .image-viewer img");

let imageViewer = document.querySelector(".page .image-viewer");


image.map((e) => {
    e.addEventListener("click", () => {
        vImage.setAttribute("src", `${e.getAttribute("src")}`);
        // imageViewer.style.cssText = "transform:scale(1)";
        imageViewer.setAttribute("style" , "transform:scale(1);") = "transform:scale(1)";

        });
    });

closeBtn.addEventListener("click", () => {
    imageViewer.style.cssText = "transform:scale(0)";
});
