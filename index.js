document.addEventListener('DOMContentLoaded', function() {
    const triangle = document.getElementById('triangle');
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');

    let triangleLeft = 700; 
    let triangleTop = 370; 
     let arrowInterval = null;

    triangle.style.left = triangleLeft + 'px';  
    triangle.style.top = triangleTop + 'px'; 

    function moveTriangle() {
        let triangleMoveDistance = 7;

        arrowInterval = setInterval(function() {
            triangleLeft += triangleMoveDistance;
            triangle.style.left = triangleLeft + 'px';

            
const triangleRect = triangle.getBoundingClientRect();
            const yesRect = yesButton.getBoundingClientRect();
            if (triangleRect.right >= yesRect.left &&
                triangleRect.left <= yesRect.right &&
                triangleRect.bottom >= yesRect.top &&
                triangleRect.top <= yesRect.bottom) {
                clearInterval(arrowInterval); 
                alert('Success!');
            }

        
            const noRect = noButton.getBoundingClientRect();
            if (triangleRect.right >= noRect.left &&
                triangleRect.left <= noRect.right &&
                triangleRect.bottom >= noRect.top &&
                triangleRect.top <= noRect.bottom) {
                clearInterval(arrowInterval); 
                window.location.reload(true);
              alert('Fail!'); 
                triangle.style.left = triangleLeft + 'px'; 
            }
        }, 50);
    }

  document.addEventListener('keydown', function(event) {
        if (!arrowInterval) { 
            moveTriangle();
        }
    });


    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
        } else if (event.key === 'ArrowLeft') {
            triangleLeft -= 25; 
            triangle.style.left = triangleLeft + 'px';
        } else if (event.key === 'ArrowRight') {
            triangleLeft += 25; 
            triangle.style.left = triangleLeft + 'px';
        }
    });
});
