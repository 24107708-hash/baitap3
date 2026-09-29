/* Hàm kích hoạt khi trang tải xong (onload) */
function addTabFocus() {
    console.log("Hàm addTabFocus() đã kích hoạt thành công qua sự kiện onload!");

    // Lấy tất cả các phần tử hình ảnh có class 'preview'
    const images = document.querySelectorAll(".preview");

    // Vòng lặp for duyệt qua từng hình ảnh và thêm thuộc tính tabindex="0"
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log(`Đã tự động thêm tabindex="0" cho hình ảnh thứ ${i + 1}`);
    }
}

/* Hàm cập nhật hình ảnh lớn khi di chuột vào hoặc nhấn Tab (Focus) */
function upDate(previewPic) {
    console.log("Sự kiện onmouseover / onfocus đã được kích hoạt.");
    console.log("Nguồn ảnh:", previewPic.src);
    console.log("Văn bản Alt:", previewPic.alt);

    const displayDiv = document.getElementById("image");

    // Thay đổi hình nền của khung displayDiv thành URL của ảnh nhỏ
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    // Thay đổi văn bản hiển thị thành thẻ alt của ảnh nhỏ
    displayDiv.innerText = previewPic.alt;
}

/* Hàm khôi phục lại trạng thái ban đầu khi rời chuột hoặc rời Tab (Blur) */
function unDo() {
    console.log("Sự kiện onmouseleave / onblur đã được kích hoạt.");

    const displayDiv = document.getElementById("image");

    // Khôi phục hình nền về rỗng
    displayDiv.style.backgroundImage = "url('')";

    // Khôi phục văn bản mặc định (Hardcoded text)
    displayDiv.innerText = "Di chuột hoặc nhấn phím Tab để di chuyển qua các hình ảnh dưới đây.";
}