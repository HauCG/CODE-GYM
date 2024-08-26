function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    // Hàm lấy hình ảnh, chiều cao và chều rộng, lấy vị trí của hình ảnh , có thể di chuyển với thuộc tính position:absolute
    this.getHeroElement = function() {
        return '<img id="hero" width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

// di chuyển
    this.moveRight = function() {
        this.left += this.speed;
        console.log('Right: ' + this.left);
    }
    this.moveLeft = function() {
        this.left -= this.speed;
        console.log('Left: ' + this.left);
    }
    this.moveUp = function() {
        this.top -= this.speed;
        console.log('Up: ' + this.top);
    }
    this.moveDown = function() {
        this.top += this.speed;
        console.log('Down: ' + this.top);
    }


}

var hero = new Hero('troll.jpg', 20, 30, 200, 20);

function start() {
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            hero.moveUp();
            break;
        case 'ArrowDown':
            hero.moveDown();
            break;
        case 'ArrowLeft':
            hero.moveLeft();
            break;
        case 'ArrowRight':
            hero.moveRight();
            break;
    }

    // cập nhật vị trí mới của đối tượng bằng gán "="
    document.getElementById('hero').style.top = hero.top + 'px';
    document.getElementById('hero').style.left = hero.left + 'px';

});
start();
