const svg = document.getElementById('Frame1');

svg.onclick = (e) => {
    const colors = ['red','blue','green','orange','purple']
    const rando = () => colors[Math.floor(Math.random()*colors.length )];
    document.documentElement.style.cssText = `
    --dark-color:${rando()};
    --light-color:${rando()};
    `
}