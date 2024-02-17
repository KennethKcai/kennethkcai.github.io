document.getElementById('homeLink').addEventListener('click', function(event){
    event.preventDefault(); 
    window.location.href = '/';});

    document.querySelectorAll('.text-item').forEach(function(item){
        item.addEventListener('mouseenter', function(){
            // 找到子元素中的 .text-link 元素以获取图片 URL
            var link = item.querySelector('.text-link');
            var imageUrl = link.getAttribute('data-image');
            var imagePreview = document.getElementById('image-preview');
            imagePreview.style.backgroundImage = 'url(' + imageUrl + ')';
            imagePreview.style.display = 'block';
        });
    
        item.addEventListener('mouseleave', function(){
            var imagePreview = document.getElementById('image-preview');
            imagePreview.style.display = 'none';
        });
    });