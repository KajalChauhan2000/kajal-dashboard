let len;
function run(){
    async function fetchdata(){
        let data = await fetch('https://jsonplaceholder.typicode.com/todos');
        let response = await data.json();

        len = response.length;
        let fildata = response.filter(e=>e.completed === true);
        document.querySelector('#taskcomp').innerHTML = fildata.length;

        let fildata1 = response.filter(e=>e.completed === false);
        document.querySelector('#taskuncomp').innerHTML= fildata1.length;

        document.querySelector('#showdata').innerHTML = response.map(e=> ` 
        <tr>
        <td> ${e.userId}</td>
        <td>${e.id}</td>
        <td>${e.title}</td>
        <td>${e.completed}</td>
    </tr>`).join(" ");
    }
    fetchdata()
}
setInterval(runningvalue,10);
let count=0;
function runningvalue(){
    if(count<=len){
        document.querySelector('#user').innerHTML = count;
        count++;
    }
}

function bars(){
    document.getElementById('largeview').style.display = "block";
    document.getElementById('bars').style.display = "none";
    document.getElementById('closebar').style.display = "block";
    document.getElementById('largeview').style.position = "absolute";
    document.getElementById('largeview').style.left = "0px";
}

function closebar(){
    document.getElementById('largeview').style.display = "none";
    document.getElementById('bars').style.display = "block";
    document.getElementById('closebar').style.display = "none";
    
}