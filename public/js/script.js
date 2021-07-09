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
            if(window.location.href.includes('arm') && language === 'eng') {
                window.location.href = window.location.href.replace('arm','eng')
            }
            if(window.location.href.includes('eng') && language === 'arm') {
                window.location.href = window.location.href.replace('eng','arm')
            }
        },
        error: function (data) {
            console.log('User creation failed :' + data);
        }
    });
}

