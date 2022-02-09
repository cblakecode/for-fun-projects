
const squareFeet = document.querySelector('#sqft');
const levels = document.querySelector('#stories');
const material = document.querySelector('.siding');
const balcony = document.querySelector('#balcony');
const patio = document.querySelector('#patio');
const fence = document.querySelector('#fence');
const elevation = document.querySelector('#elevated');
const driveway = document.querySelector('#driveway');
const button = document.querySelector('.submit-button');
let modal = document.querySelector('#myModal');
let div1 = document.querySelector('#receipt');
let babyDiv = document.createElement('div');
let span = document.querySelectorAll('.close')[0];
 


function priceCalculate() {
    let matValues = material.value.toLowerCase()
    if (matValues === 'vinyl') {
        if (squareFeet.value >= 0 && squareFeet.value <= 6000) {
            let vinylPrice = squareFeet.value * 0.06
                 document.getElementById('sqft_price').append(`Materail: +${vinylPrice}`)
            return vinylPrice
        } else {
            alert('Invalid Square Footage')
        }
    } else if (matValues === 'brick' || matValues === 'stucco') {
        if (squareFeet.value >= 0 && squareFeet.value <= 6000) {
            let masonryPrice = squareFeet.value * 0.08
                document.getElementById('sqft_price').append(`Material: +${masonryPrice}`)
            return masonryPrice
        } else {
            alert('Invalid Square Footage')
        }
    } else if (matValues === 'hardy plank') {
        if (squareFeet.value >= 0 && squareFeet.value <= 6000) {
            let woodPrice = squareFeet.value * 0.07
            document.getElementById('sqft_price').append(`Material: +${woodPrice}`)
            return woodPrice
        } else {
            alert('Invalid Square Footage')
        }
    } else {
        alert('Invalid Material')
    }
}

function storiesPrice() {
    let stories = levels.options[levels.selectedIndex].value
    if (stories === 'one') {
        let price1 = 0
            document.getElementById('story_price').append(`Stories: +${price1}`)
        return price1
    } else if (stories === 'two') {
        let price2 = 15
            document.getElementById('story_price').append(`Stories: +${price2}`)
        return price2
    } else if (stories === 'three'){
        let price3 = 100
            document.getElementById('story_price').append(`Stories: +${price3}`)
        return price3
    } else {
        alert('Please select stories')
    }
}

function balconyPrice() {
    let balconyValue = balcony.options[balcony.selectedIndex].value
    if (balconyValue === 'yes') {
        let balcPrice1 = 20
            document.getElementById('balc_price').append(`Balcony: +${balcPrice1}`)
        return balcPrice1
    } else if (balconyValue === 'no') {
        let balcPrice2 = 0
            document.getElementById('balc_price').append(`Balcony: +${balcPrice2}`)
        return balcPrice2
    } else {
        alert ('Please select balcony option')
    }
}

function patioPrice() {
    let patioValue = patio.options[patio.selectedIndex].value
    if (patioValue === 'yes') {
        let patLinFt = parseInt(prompt('Linear Feet of Patio: ')) * 2;
            document.getElementById('patio_price').append(`Patio: +${patLinFt}`)
        return patLinFt
    } else if (patioValue === 'no') {
            document.getElementById('patio_price').append('Patio: +0')
        return 0
    } else {
        alert('Please select patio option')
    }
}

function fencePrice() {
    let fenceValue = fence.options[fence.selectedIndex].value
    if (fenceValue === 'yes') {
        let fenceLinFt = parseInt(prompt('Linear Feet of Fence: ')) * 1.5;
            document.getElementById('fence_price').append(`Fence: +${fenceLinFt}`);
        return fenceLinFt
    } else if (fenceValue === 'no') {
            document.getElementById('fence_price').append('Fence: +0')
        return 0
    } else {
        alert('Please select fence option')
    }
}

function elevatedPrice() {
    let elevatedValue = elevation.options[elevation.selectedIndex].value
    if (elevatedValue === 'yes') {
        let num1val = 50
            document.getElementById('elev_price').append(`Elevated: +${num1val}`);
        return 50
    } else if (elevatedValue === 'no') {
            document.getElementById('elev_price').append('Elevated: +0');
        return 0
    } else {
        alert('Please select elevated option')
    }
}

function drivewayPrice() {
    let drivewayValue = driveway.options[driveway.selectedIndex].value
    if (drivewayValue === 'yes') {
        let drivewayLinFt = parseInt(prompt('Linear Feet of Driveway: ')) * 4;
            document.getElementById('drive_price').append(`Driveway: +${drivewayLinFt}`);
        return drivewayLinFt
    } else if (dricewayValue === 'no') {
            document.getElementById('drive_price').append('Driveway: +0');
        return 0
    } else {
        alert('Please select driveway option')
    }
}

button.addEventListener('click', function priceGen(e) {
    e.preventDefault();
    let addTogether = priceCalculate() + storiesPrice() + balconyPrice() +
    patioPrice() + fencePrice() + elevatedPrice() + drivewayPrice();
    document.getElementById('total_price').append(`Total: $${addTogether}.00`);
    modal.style.display = "block";
    return addTogether;
})

const closer = () => {
    modal.style.display = "none";
    document.getElementById('format').reset();
    document.getElementById('sqft_price').innerHTML = '';
    document.getElementById('story_price').innerHTML = '';
    document.getElementById('balc_price').innerHTML = '';
    document.getElementById('patio_price').innerHTML = '';
    document.getElementById('fence_price').innerHTML = '';
    document.getElementById('elev_price').innerHTML = '';
    document.getElementById('drive_price').innerHTML = '';
    document.getElementById('total_price').innerHTML = '';
}

span.addEventListener('click', closer());

span.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
})

