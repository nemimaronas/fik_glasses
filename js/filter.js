let checkboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
let products = Array.from(document.querySelectorAll('.product'));
let contentProducts = document.getElementsByClassName("content-products")[0];

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("click", function() {
        getCheckboxValues();
        filterColor();
    })
})

function getCheckboxValues() {
    var checkboxValues = [];
    checkboxes.forEach((checkbox) => {
          if (checkbox.checked) checkboxValues.push(checkbox.value);
    });
    return checkboxValues;
}

function filterColor() {
    checkboxValues = getCheckboxValues();
    products.forEach((item) => {
        item.style.display = "none";
        let colors = item.getAttribute("data-color");
        if(checkboxValues.length > 0) {
            for(let i = 0; i < checkboxValues.length; i++) {
                if (colors == checkboxValues[i]) item.style.display = "block";
            }
            if (!contentProducts.classList.contains("filtered")) contentProducts.classList.add("filtered");
        } else {
            item.style.display = "block";
            if (contentProducts.classList.contains("filtered")) contentProducts.classList.remove("filtered");
        }
    });    
}


