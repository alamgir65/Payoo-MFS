export default function createTransaction(transactionName) {
    console.log('Calling Transaction function from somewhere...');

    // Icon circle
    const div1 = document.createElement('div');
    div1.className = "rounded-[50%] bg-[#f4f5f7] p-3 mr-5";
    const img = document.createElement('img');
    img.src = './assets/wallet1.png';
    div1.appendChild(img);

    // Title + subtitle
    const div2 = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.className = "text-lg font-bold";
    h1.innerText = transactionName;
    const p = document.createElement('p');
    p.innerText = 'Today 11:39 AM';
    div2.appendChild(h1);
    div2.appendChild(p);

    // Ellipsis icon
    const div3 = document.createElement('div');
    const i = document.createElement('i');
    i.className = "fa-solid fa-ellipsis-vertical";
    div3.appendChild(i);

    // Left side (icon + text)
    const leftDiv = document.createElement('div');
    leftDiv.className = "flex items-center"; // Tailwind: horizontal align
    leftDiv.appendChild(div1);
    leftDiv.appendChild(div2);

    // Main container
    const mainDiv = document.createElement('div');
    mainDiv.className = "flex justify-between bg-white p-3 rounded-xl shadow-md mb-3";
    mainDiv.appendChild(leftDiv);
    mainDiv.appendChild(div3);

    // Append to list
    document.getElementById('transaction-list').appendChild(mainDiv);

    // Return main div in case we want to reuse it
    return mainDiv;
}
