let display = document.getElementById('display')
let savedCountList = document.getElementById('saved-counts-list')
let entryMessage = document.getElementById('entry-message')


let count = 0

function increment() {
    count += 1
    display.textContent = count
}

function decrement() {
    count -= 1
    display.textContent = count
}
   
function saveCount() {
    let savedCount = document.createElement('li')
    savedCount.className = 'entry'
    savedCount.textContent = count
    savedCountList.appendChild(savedCount)
    count = 0
    display.textContent = count
    entryMessage.classList.add('no-display')
}

function removeLastEntry() {
    let countEntries = savedCountList.getElementsByTagName('li')
    
    if (countEntries.length > 0) {
        countEntries[countEntries.length - 1].remove();
    }

    if (countEntries.length === 0) {
        entryMessage.classList.remove('no-display')
    }
}