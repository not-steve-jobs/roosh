function deleteOrder(blog) {
    const id = blog.getAttribute('value');
        $.ajax({
        url: `/admin_profile/thisBlog/${id}`,
        type: 'DELETE',
        success: function (response) {
            location.replace('http://localhost:3000/admin_profile/adminblog');
            document.getElementById(id).remove();

        },
        error: function (data) {
            console.log('Product Delete failed :' + data);
        }
    });
}
function changeLanguage() {
    const language = document.getElementById('language').value
    const obj = {
        language
    }
    $.ajax({
        url: '/language',
        type: 'POST',
        data: obj,
        success: function () {
                window.location.reload(1);
        },
        error: function (data) {
            console.log('User creation failed :' + data);
        }
    });
}

