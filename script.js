document.getElementById('homeLink').addEventListener('click', function(event){
    event.preventDefault(); 
    window.location.href = '/';});

    document.querySelectorAll('.text-item').forEach(function(item){
        item.addEventListener('mouseenter', function(){
            // 找到子元素中的 .text-link 元素以获取图片 URL
            var link = item.querySelector('.text-link');
            var imageUrl = link.getAttribute('data-image');
            var imagePadding = link.getAttribute('data-padding');
            var imagePreview = document.getElementById('image-preview');

            link.style.color = 'black';
            imagePreview.style.backgroundImage = 'url(' + imageUrl + ')';
            imagePreview.style.padding = imagePadding;
            imagePreview.style.display = 'block';
        });
    
        item.addEventListener('mouseleave', function(){
            var imagePreview = document.getElementById('image-preview');
            imagePreview.style.display = 'none';

            var link = item.querySelector('.text-link');
            link.style.color = '';
        });
    });